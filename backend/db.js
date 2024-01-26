require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var Schema = mongoose.Schema;
const saltRounds = 10;


const uri = process.env.DATABASE_URL;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const entryShema = new Schema({
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    address: String,
    city: String,
    postal: String,
    price: Number,
    rooms: Number,
    image: String,
    userId: mongoose.Schema.Types.ObjectId,
    amenities: {
      familyFriendly: Boolean,
      petsAllowed: Boolean,
      smokingAllowed: Boolean,
      aircon: Boolean,
      balcony: Boolean,
      bath: Boolean,
      beach: Boolean,
      dryer: Boolean,
      elevator: Boolean,
      freeParking: Boolean,
      hairDryer: Boolean,
      heating: Boolean,
      kitchen: Boolean,
      safe: Boolean,
      selfCheckIn: Boolean,
      ski: Boolean,
      tv: Boolean,
      washer: Boolean,
      wifi: Boolean,
    },
  });
  
  const Entry = mongoose.models.Entry || mongoose.model("Entry", entryShema);
  
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

const User =  mongoose.models.User || mongoose.model('User', userShema);
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
  if (!entries) {
    return null;
  }
  return entries;
};

const getEntry = async (id) => {
  const entry = await Entry.findById(id).exec();
  return entry;
};

const getEntrysByUserId = async (id) => {
  const entries = await Entry.find({userId: {
    $eq: id
  
  }}).exec();
  return entries;
};

const createEntry = async (
  title,
  description,
  address,
  city,
  postal,
  price,
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
    rooms,
    image,
    userId,
    amenities,
  });
  return entry;
};

const db = {
  login,
  register,
  getEntrys,
  getEntry,
  getEntrysByUserId,
  createEntry,
  checkUser,
};

module.exports = db;