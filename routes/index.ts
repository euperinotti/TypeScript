import { Router, Request, Response } from 'express';
import { home, newUser } from '../src/controllers/home.controller';
import { formGet, formPost } from '../src/controllers/form.controller';

const router = Router();

router.get('/', home);
router.get('/nome', formGet);
router.post('/nome-resultado', formPost);
router.get('/novousuario', newUser)

export default router;
