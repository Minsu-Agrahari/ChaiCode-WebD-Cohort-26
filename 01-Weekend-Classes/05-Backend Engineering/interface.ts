// Custom type <T>

type UserID = string; //     |
                      //     |
interface User {      //     |
    id: UserID,       // <---|
    fname: string,
    lname?: string, // 🥢 optional param hai
    email: string,
    contact: {
        mobile: string,
    }
    address: {
        street: number,
        pin: number,
        country: string
    }
}

class InMemoryDB {
    // ➡️ private _db: Map<User['id'], User> //➡️ User['id'] --> Will automatically dynamicly assign id ==> type [[ $$ not good particles ]]

    private _db: Map<UserID, User>;

    constructor (){
        this._db = new Map();
    }

    // 🎯 sending promise
    // public async insertUser (data: User): Promise <UserID> {

    //     if(this._db.has(data.id)){
    //         throw new Error (`User with ID ${data.id} already exits`);
    //     }
    //     this._db.set(data.id, data); // key: string, value: User
    //     return data.id;
    // }

    public insertUser (data: User): UserID {

        if(this._db.has(data.id)){
            throw new Error (`User with ID ${data.id} already exits`);
        }
        this._db.set(data.id, data); // key: string, value: User
        return data.id;
    }

    public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean{
        
        // User validation
        if (!this._db.has(id)){
            throw new Error (`User with Id ${id} does not exists`);
        }

        this._db.set(id, {...updateData, id});

        return true;
    }
}

// another instand od InMemortyDB class
const myDb = new InMemoryDB();

// insert user
myDb.insertUser({
    id: '1',
    fname: 'Minsu',
    lname: 'Agrahari',
    email: 'minsua@outlook.com',
    contact: {
        mobile: '9999999',
    },
    address: {
        country: 'In',
        pin: 122222,
        street: 1
    }
});

// update user
myDb.updateUser('1', {
    fname: 'Minsu_00',
    email: 'minsua123@outlook.com',
    contact: {
        mobile: '9999999',
    },
    address: {
        country: 'In',
        pin: 122222,
        street: 1
    }
})
