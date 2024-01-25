import mongoose from "mongoose";
var Schema = mongoose.Schema;
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
export default Entry;