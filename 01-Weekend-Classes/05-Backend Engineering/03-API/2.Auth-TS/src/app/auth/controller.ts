import { Request, Response } from 'express'
import { createHmac, randomBytes } from 'node:crypto';
import { signinPayloadModel, signupPayloadModel } from './models'
import { db } from '../../db';
import { userTable } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { createUserToken } from './utils/token';

class AuthenticationController {
    public async handleSignup (req: Request, res: Response){

        const validationResult = await signupPayloadModel.safeParseAsync(req.body);
        
        if(validationResult.error) return res.status(400).json({message: 'body validation failed', error: validationResult.error.issues})
        
        const { firstName, lastName, email, password } = validationResult.data
    
        const userEmailResult = await db.select().from(userTable).where(eq(userTable.email, email))

        if (userEmailResult.length > 0 ) return res.status(400).json({error: 'duplicate entry', message: `user with email ${email} already exists`});

        const salt = randomBytes(32).toString('hex')
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        const [result] = await db.insert(userTable).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({id: userTable.id})
        
        return res.status(201).json({message: 'user has been created successfully', data: {id: result?.id}})
    }

    // TODO: put DTO layer || DRY prinicple violents
    public async handleSignin (req: Request, res: Response){
        const validationResult = await signinPayloadModel.safeParseAsync(req.body)

        if(validationResult.error) return res.status(400).json({message: 'body validation failed', error: (await validationResult).error.issues})
            
        const {email, password} = validationResult.data

        const [userSelect] = await db.select().from(userTable).where(eq(userTable.email, email))
        if(!userSelect) return res.status(404).json({message: `user with email ${email} does not exists`})
    
        const salt = userSelect.salt!
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        if(userSelect.password !== hash) return res.status(400).json({message: `email or password is incorrect`})
    
        // TODO: Token Creation ✅
        const token = createUserToken({id: userSelect.id})

        return res.json({message: 'Signin Success', data: {token}})
    }

}

export default AuthenticationController
