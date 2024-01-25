require("dotenv").config();
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./User";
import Entry from "./Entry";
const saltRounds = 10;

const uri = process.env.DATABASE_URL;

mongoose.connect(`${uri}`);

const login = async (
  email,
  password
) => {
  const user = await User.findOne({ email: email }).exec();
  if (!user || !user.password) {
    return null;
  }
  const match = await bcrypt
    .compare(password, user.password)
    .then((res) => res);
  if (!match) {
    return null;
  }
  return user;
};

const checkUser = async (email) => {
  const user = await User.findOne({ email: email }).exec();
  return user;
};

const register = async (
  email,
  name,
  password,
  address,
  city,
  postal
) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  const user = new User({
    email: email,
    password: hash,
    name: name,
    address: address,
    city: city,
    postal: postal,
  });
  await user.save();
  return user;
};

const getEntrys = async () => {
  const entries = await Entry.find().exec();
  return entries;
};

const getEntry = async (id) => {
  const entry = await Entry.findById(id).exec();
  return entry;
};

const getEntrysByUserId = async (id) => {
  const entries = await Entry.find({ userId: id }).exec();
  return entries;
};

const createEntry = async (
  title,
  description,
  address,
  city,
  postal,
  price,
  priceCleaning,
  rooms,
  image,
  userId,
  amenities
) => {
  const entry = Entry.create({
    title,
    description,
    address,
    city,
    postal,
    price,
    priceCleaning,
    rooms,
    image,
    userId,
    amenities,
  });
  return entry;
};

const getUser = async (email) => {
  const user = User.findOne({ email: email }).exec();
  return user;
}

const db = {
  login,
  register,
  getEntrys,
  getEntry,
  getEntrysByUserId,
  createEntry,
  checkUser,
  getUser
};

export default db;