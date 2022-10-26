import { Request, Response } from "express";
import Product from '../models/Product';

export const listaProduto = (req: Request, res: Response) => {
    let produto1: Product = {
        name: 'maca',
        price: 10
    }
    
    let produto2: Product = {
        name: 'banana',
        price: 15
    }

    res.render('pages/home', {
        produto: [produto1, produto2]
    });
}