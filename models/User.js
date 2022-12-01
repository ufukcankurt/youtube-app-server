import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    img: {
        type: String,
        default:"https://i.pinimg.com/474x/c6/6a/73/c66a732387c737fa97526841cbdc0938.jpg",
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedUsers: {
        type: [String],
    },
    fromGoogle: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);