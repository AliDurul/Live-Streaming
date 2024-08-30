import express from 'express';
import auth from "../controllers/auth.js";

const router = express.Router();

router.post('/signup', auth.register);
router.post('/login', auth.login);
router.post('/logout', auth.logout);

export default router;