//conexión a la base de datos...
import database from 'rest-mssql-nodejs'
import { config } from 'dotenv';
config();


const rest = new (database)(
  {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    port: 1433,
    encrypt: true,
    enableArithAbort: false,
  }
);


export default rest;