// Data Transfer Objects for standardized data structures.

import Joi from "joi";

class BaseDto {
    static schema = Joi.object({})

    static validate(data){
        const {error, value} =  this.schema.validate(data, {
            abortEarly: false, // Show all errors, not just first one.
            stripUnknown: true // Removes fields not allowed in schema.
        })

        if(error){
            const errors = error.details.map((d) => d.message)
            return {errors, value: null}
        }
        return {errors: null, value}
    }

}

export default BaseDto