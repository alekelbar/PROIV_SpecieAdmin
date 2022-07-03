import { Router } from "express";
import { createSpecie, deleteSpecie, getSpecies, getSpeciesById, updateSpecie } from "../controllers/species.controller";

const species_router = Router();

species_router.get('/species', getSpecies)
species_router.get('/species/:SpecieId', getSpeciesById)
species_router.put('/species', updateSpecie)
species_router.delete('/species/:SpeciesId', deleteSpecie)
species_router.post('/species', createSpecie)

export default species_router;