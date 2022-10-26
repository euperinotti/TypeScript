import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('pages/home', {
        user: peri,
        produto: [produto1, produto2],
        frases: [
            // 'alooo',
            // 'uepa',
            // 'ele gosta'
        ]
    })
})

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
