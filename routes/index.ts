import { Router, Request, Response } from 'express';

const router = Router();

class User {
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}

let peri: User = {
    name: 'Guilherme',
    lastName: 'Perinotti',
    age: 19
}

router.get('/', (req: Request, res: Response) => {
    console.log('funcionou');
    res.render('home', {
        user: peri
    })
})

export default router;
