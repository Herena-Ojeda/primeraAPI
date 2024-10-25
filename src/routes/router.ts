import Express from "express";
import path from "path";
import pool from '../configDb.js';
import { publicPath } from '../configData.js'

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
    const queryString = `INSERT INTO "user" ("userName", "name", "first_surname", "password", "email") VALUES ('${req.body.username}', '${req.body.name}', '${req.body.surname}', '${req.body.password}','${req.body.email}')`;
    const result = await pool.query (queryString);
    res.send(result.rows);
});

export { router };