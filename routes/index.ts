import { Router, Request, Response } from 'express';
import { listaProduto } from '../src/controllers/product.controller';

const router = Router();

router.get('/', listaProduto);

// router.get('/nome', (req, res) => {
//     console.log('Query String: ' + JSON.stringify(req.query));

//     let nome: string = req.query.nome as string;

//     res.render('pages/nome', {
//         nome
//     })
// })

router.post('/nome-resultado', (req, res) => {
    console.log('Query String: ' + JSON.stringify(req.body));

    let nome: string = req.body.nome as string;

    res.render('pages/nome', {
        nome
    })
})

export default router;
