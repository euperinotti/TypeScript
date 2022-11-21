import { Request, Response } from "express";
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.findAll()

    res.render('pages/home', {
        users
        // user: peri,
        // produto: [produto1, produto2]
    });
}

export const newUser = async (req: Request, res: Response) => {
    let newName = req.query.nome;
    let newLastName = req.query.sobrenome;
    let newAge = Number(req.query.idade);

    if(newName){
        const newUserBuild = User.build({
            nome: newName,
            sobrenome: newLastName
        })

        if(newAge){
            newUserBuild.idade = newAge;
        }

        await newUserBuild.save();
    }
    res.redirect('/');
}