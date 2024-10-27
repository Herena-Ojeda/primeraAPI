import Express from "express";
import path from "path";
import pool from '../configDb.js';
import { publicPath } from '../configData.js'
import { saveUserHandler } from "../handlers/userHandler.js";

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, '/index.html');
    res.sendFile(targetFilePath);
});

router.get('/user', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, '/newUser.html');
    res.sendFile(targetFilePath);
});

router.get('/pagina2', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, '/pagina2.html');
    res.sendFile(targetFilePath);
});

router.post("/user", async (req: Express.Request, res: Express.Response) => {
    const result = saveUserHandler(req.body);
    res.send(result);
});

export { router };
