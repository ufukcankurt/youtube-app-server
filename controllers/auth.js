import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });

        await newUser.save();
        res.status(200).json("User has been created!");
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {

    try {

        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            return next(createError(404, "User not found!"));
        }

        const isCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isCorrect) {
            return next(createError(400, "Password is incorrect!"));
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: "1d" });
        const { password, ...others } = user._doc;

        res.cookie("access_token", token, { httpOnly: true, sameSite: "none", secure: true }).status(200).json(others);

    } catch (error) {
        next(error);
    }
}