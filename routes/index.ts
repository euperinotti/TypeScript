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

export default router;
