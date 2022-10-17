// rodando um servidor com node 

<<<<<<< HEAD
import express, { Request, Response} from 'express';
=======
import express, { Request, Response } from 'express';
import mainRoutes from '../routes/routes';
>>>>>>> 8cf44bff10fe75990db0cb28a2a632ed63271ee2

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
})

<<<<<<< HEAD
server.listen(3000)
=======
server.use(mainRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
})

server.listen(3000);
>>>>>>> 8cf44bff10fe75990db0cb28a2a632ed63271ee2
