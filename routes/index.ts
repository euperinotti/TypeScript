import { Router, Request, Response } from 'express';
import { home } from '../src/controllers/home.controller';
import { formGet, formPost } from '../src/controllers/form.controller';

const router = Router();

router.get('/', home);

router.get('/nome', formGet);

router.post('/nome-resultado', formPost);

export default router;
