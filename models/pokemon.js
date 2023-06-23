import mongoose from "mongoose";
const pokemonSchema = mongoose.Schema({
  avatar: { type: String },
  name: { type: String },
  age: { type: Number },
  breed: { type: String },
  adopted: { type: Number, required: true },
  health: { type: Number, required: true },
  userAdopted: { type: String,default:null },
});

export default mongoose.model("Pokemon", pokemonSchema);
