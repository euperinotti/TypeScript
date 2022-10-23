import { Router, Request, Response } from 'express';
import Product from '../src/class/product'

const router = Router();

class User {
    name: string;
    lastName: string;
    age: number;
    showWelcome: boolean;

    constructor(name: string, lastName: string, age: number){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.showWelcome = false || true;
    }
}

let peri: User = {
    name: 'Guilherme',
    lastName: 'Perinotti',
    age: 19,
    showWelcome: true
}

let produto1: Product = {
    name: 'maca',
    price: 10
}

let produto2: Product = {
    name: 'banana',
    price: 15
}

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
