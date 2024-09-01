import { Schema, model, set } from "mongoose";

import hashPassword from '../helper/passwordEncrypt.js';

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [(email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email), 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        set: (pass) => hashPassword(pass)
    },
    image: {
        type: String,
        default: "",
    },
    searchHistory: {
        type: Array,
        default: [],
    },
});

userSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret._id;
    },
});

export const User = model("User", userSchema);
