import CustomError from "../helper/customError.js"

export const isLogin = (req, res, next) => {

    if (process.env.NODE_ENV === 'development') {
        next()
    } else {
        if (!req.user) throw new CustomError("AuthenticationError: You must be logged in to access this resource.", 403)
        next()
    }
}