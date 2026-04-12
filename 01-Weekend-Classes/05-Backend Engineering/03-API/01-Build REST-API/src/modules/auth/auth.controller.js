import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const register = async (req, res) => {
    // something
    const user = authService.register(req.body)
    ApiResponse.created(res, "Registration success", user)
}

export {register};
