import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: {type:Number},
  email: { type: String },
  password: { type: String, required: true },
  
});

export default mongoose.model("PokemonUser", userSchema);