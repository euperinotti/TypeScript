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

// const perinotti = new User('Guilherme', 'Perinotti', 19);

let peri: User = {
    name: 'a',
    lastName: 'b',
    age: 0
}

router.get('/', (req: Request, res: Response) => {
    res.render('home', {
        user: peri
    })
})

export default router;
