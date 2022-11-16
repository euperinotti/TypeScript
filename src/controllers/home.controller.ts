import { Request, Response } from "express";
import Product from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.findAll()

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