'use strict';
/* IMPORTS */
import express from 'express';
import "express-async-errors";
import 'dotenv/config';
import authentication from './src/middlewares/authentication.js';
import errorHandler from './src/middlewares/errorHandler.js';
import dbConnection from './src/config/db.js';
import mainRoute from './src/routes/index.js'


/* REQUIRED */
const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

/* CONFIGS */
dbConnection();
// console.log(process.env.MONGO_URI);

/* MIDDLEWARES */
app.use(express.json());
app.use(authentication);

/* ROUTES */
app.use('/api/v1', mainRoute)


app.get('/', (req, res) => {

    res.send(name);
});

app.use(errorHandler);

app.listen(PORT, HOST, () => console.log(`-- port runs at: http://${HOST}:${PORT} --`));