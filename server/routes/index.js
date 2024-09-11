import express from 'express';
import auth from './auth.js';
import movie from './movie.js'
import tv from './tv.js'
import search from './search.js'
import { isLogin } from '../middlewares/permissions.js';


const router = express.Router();

router.use('/auth', auth)

router.use('/movie', movie)

router.use('/tv', tv)

router.use('/search', search)

export default router;