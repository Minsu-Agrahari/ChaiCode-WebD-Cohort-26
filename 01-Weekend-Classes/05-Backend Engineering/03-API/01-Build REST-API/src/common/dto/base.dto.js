import Joi from "joi";

// DTO :- Data Transfer Objects
class BaseDto {

    // implementating << Joi >>
    static schema = Joi.object({})

    static validate(data) {
        const { error, value } = this.schema.validate(data, { // validation gives (error and value)
            abortEarly: false, // By default: true --> means agar koi error means at that this vaildation abort kardo ## but by doing false, it means agar error means than also abort mat karo continue till complete error is collected, onces it is collected sent it to the frontend 
            stripUnknown: true, // take those files which are definded -- prevent DDocs attack 
        });

        if(error){
            const errors = error.details.map((d) => d.message);
            return {errors, value: null};
        }

        return {errors: null, value}
    }
}

export default BaseDto;
