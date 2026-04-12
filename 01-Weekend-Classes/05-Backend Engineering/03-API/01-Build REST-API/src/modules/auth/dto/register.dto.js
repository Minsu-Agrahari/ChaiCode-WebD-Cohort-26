import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js"

class RegisterDto extends BaseDto {
    static schema = Joi.object({
        name: Joi.string().trim().min(2).max(50).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().message("Custom message: Password much contains 8 chars minimum").min(8).required(),
        role: Joi.string().valid("cusomer", "seller").default("customer"),
    })
}

export default RegisterDto
