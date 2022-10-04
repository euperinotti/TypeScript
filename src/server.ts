// rodando um servidor com node 

import express, { Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
})

server.listen(3000)