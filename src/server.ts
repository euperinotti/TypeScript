// importando as bibliotecas ---------- 

import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from '../routes';
import dotenv from 'dotenv';

// configurando o serivdor ----------
dotenv.config();

// instanciando o servidor
const server = express();
const port = process.env.PORT;

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());

// Habilita o servidor para pegar requisicoes via metodo POST
server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

// Os arquivos presentes dentro desse diretorio estarao acessiveis
// por meio de url
server.use(express.static(path.join(__dirname,'../public')));

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
})

server.listen(port, () => {
    console.log(`Server running - port ${port}`);
}); // porta do servidor
