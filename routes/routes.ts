import { Router, Request, Response } from 'express';

const router = Router();

class User {
    name: string;
    lastName: string;
    age: number;

    constructor(){
        this.name = '';
        this.lastName = '';
        this.age = 0;
    }
}

const perinotti = new User();

perinotti.name = 'Guilherme';

// let user: any = {
//     name: 'Guilherme',
//     lastName: 'Perinotti',
//     age: 19
// }

router.get('/', (req: Request, res: Response) => {
    res.render('home', {

    })
})

export default router;
