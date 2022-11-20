import { Request, Response } from "express";
import { Op } from "sequelize";
import Product from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.findAll({
        where: {
            // nome: {
            //     [Op.like]: '%a%'
            // },
            // idade: {
            //     // [Op.gt]: 18, -> Maior que
            //     // [Op.gte]: 18, -> Maior ou igual
            //     // [Op.lt]: 20, -> Menor que
            //     [Op.lte]: 20 // Menor ou igual a
            //     // [Op.between]: [10, 20] -> Retorna dados que estejam entre 10 e 20
            // }

            // [Op.or]: [ // Condicoes de busca
            //     { nome: 'tiago' },
            //     { idade: 20 }
            // ]
        }, order: [
            ['idade', 'DESC'], // ASC ou DESC
            ['nome', 'ASC']
        ],
        offset: 1, // Pula x itens da consulta
        limit: 3 // Limita a consulta a 3 itens apenas
    })

    console.log(JSON.stringify(users));
    // try{
    //     await sequelize.authenticate();
    //     console.log('Conexão estabelecida com sucesso');
    // } catch(error){
    //     console.log('Deu problema na conexão', error);
    // }
    
    // let peri: User = {
    //     name: 'Guilherme',
    //     lastName: 'Perinotti',
    //     age: 19,
    //     showWelcome: true
    // }

    // let produto1: Product = {
    //     name: 'maca',
    //     price: 10
    // }
    
    // let produto2: Product = {
    //     name: 'banana',
    //     price: 15
    // }

    res.render('pages/home', {
        users
        // user: peri,
        // produto: [produto1, produto2]
    });
}