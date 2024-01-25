import mongoose from "mongoose";
var Schema = mongoose.Schema;
const userShema = new Schema({
    email: String,
    name: String,
    password: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    address: String,
    city: String,
    postal: String,
});

const User = mongoose.models.User || mongoose.model("User", userShema);
export default User;