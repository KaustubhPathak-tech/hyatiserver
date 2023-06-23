import express from "express";
import {
  getAllPokemons,
  adoptPokemon,
  feedPokemon,
} from "../controllers/pokemon.js";
const router = express.Router();
router.get("/getAllPokemons", getAllPokemons);
router.patch("/adoptPokemon", adoptPokemon);
router.patch("/feedPokemon", feedPokemon);
export default router;
