'use strict';
/* IMPORTS */
import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import authentication from './server/middlewares/authentication.js';
import errorHandler from './server/middlewares/errorHandler.js';
import dbConnection from './server/config/db.js';
import mainRoute from './server/routes/index.js'
import CustomError from './server/helper/customError.js';
import cors from 'cors';

/* REQUIRED */
const app = express();
dotenv.config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

/* CONFIGS */
dbConnection();
// console.log(process.env.MONGO_URI);

/* MIDDLEWARES */
app.use(express.json());
app.use(authentication);
app.use(cors());

/* ROUTES */
app.get('/', (req, res) => {

    res.status(200).send({
        error: false,
        message: 'This is streamin API'
    });
});

app.use('/api/v1', mainRoute)

app.use((req, res, next) => {
    const err = new CustomError('This URL path does not exist!', 404)
    next(err)
})

/* ERROR HANDLER */
app.use(errorHandler);

app.listen(PORT, HOST, () => console.log(`-- port runs at: http://${HOST}:${PORT} --`));