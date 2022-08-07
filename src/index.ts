import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine';
const app: Express = express();
const port : string | 4000 = process.env.PORT || 4000;
import http from 'http';
import { Server } from 'socket.io';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = http.createServer(app);
const io = new Server(server);
viewEngine(app);
app.get('/', (req: Request, res: Response) => {
    return res.render('index.ejs', {
        title: "Home Page"
    })
});
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on("hello", (data: any) =>{
        console.log(data)
    })
});
server.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
