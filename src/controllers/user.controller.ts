import { Request, Response } from "express";
import User from '../models/User';

export const Users = (req: Request, res: Response) => {
    let peri: User = {
        name: 'Guilherme',
        lastName: 'Perinotti',
        age: 19,
        showWelcome: true
    }

    res.render('pages/home', {
        user: peri
    });
}