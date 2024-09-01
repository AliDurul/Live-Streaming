import express from 'express';
import auth from './auth.js';
import movie from './movie.js'
import tv from './tv.js'


const router = express.Router();

router.use('/auth', auth)

router.use('/movie', movie)

router.use('/tv', tv)

export default router;