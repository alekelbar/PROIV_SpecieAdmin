import express from 'express'
import species_router from './routes/Species.route';
import cors from 'cors'

const app = express();

//middlewares...
app.use(cors())
app.use(express.json()) // body parser...
app.use(species_router);

export default app;