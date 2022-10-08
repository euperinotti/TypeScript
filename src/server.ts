// rodando um servidor com node 

import express, { Request, Response } from 'express';
import mainRoutes from '../routes/routes';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
})

server.use(mainRoutes);

server.listen(3000);