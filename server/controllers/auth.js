
import CustomError from '../helper/customError.js';
import generateToken from '../helper/generateToken.js';
import hashPassword from '../helper/passwordEncrypt.js';
import { User } from '../models/user.js';



export const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) throw new CustomError('Please fill in all fields.', 400);

    const user = await User.findOne({ email });

    if (!user) throw new CustomError('User does not exist.', 404);

    if (user && user.password !== hashPassword(password)) throw new CustomError('Invalid credentials.', 400);

    res.status(200).send(generateToken(user));

}
export const logout = async (req, res) => {

    res.status(200).send({
        error: false,
        msg: "Logged out successfully"
    })

}
export const register = async (req, res) => {

    const { username, email, password } = req.body;


    if (!email || !password || !username) throw new CustomError('Please fill in all fields.', 400);

    if (password.length < 6) throw new CustomError('Password must be at least 6 characters.', 400);

    let user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) throw new CustomError('User already exists with same Email or Username.', 400);

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    req.body.image = image;

    user = await User.create(req.body);

    res.status(200).send(generateToken(user))


}