import { Router, Request, Response } from 'express';

export const formGet = (req: Request, res: Response) => {
    console.log('Query String: ' + JSON.stringify(req.query));

    let nome: string = req.query.nome as string;

    res.render('pages/nome', {
        nome
    })
}

export const formPost = (req: Request, res: Response) => {
    console.log('Query String: ' + JSON.stringify(req.body));

    let nome: string = req.body.nome as string;

    res.render('pages/nome', {
        nome
    })
}