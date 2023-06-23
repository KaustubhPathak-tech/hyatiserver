//jshint esversion:6
import pokemon from "./models/pokemon.js";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import pokemonRoutes from "./routes/pokemons.js";
import dotenv from "dotenv";

import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("<h1>Server is Ok ! take care of frontend. 😊</h1>");
});

app.use("/user", userRoutes);
app.use("/pokemon", pokemonRoutes);

mongoose.set("strictQuery", false);
const PORT = process.env.PORT || 7000;
const DATABASE = process.env.CONNECTION_URL;
mongoose
  .connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
    console.log("         Database URL       ");
  });

export default app;
