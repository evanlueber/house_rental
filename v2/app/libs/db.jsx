require("dotenv").config();
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const uri = process.env.DATABASE_URL;

mongoose.connect(
  `${uri}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userShema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  address: String,
  city: String,
  postal: String,
  liked: Array,
});

const User = mongoose.model("user", userShema);

const entrySchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: new Date(),
  updatedAt: new Date(),
  address: String,
  city: String,
  postal: String,
  price: Number,
  priceCleaning: Number,
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
    elevator: Boolean,
    freeParking: Boolean,
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


const Entry = mongoose.model("entry", entrySchema);