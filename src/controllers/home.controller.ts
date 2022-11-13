import { Request, Response } from "express";
import Product from '../models/Product';
import User from '../models/User';
import { sequelize } from '../instances/mysql';

export const home = (req: Request, res: Response) => {
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

    res.render('pages/home', {
        user: peri,
        produto: [produto1, produto2]
    });
}