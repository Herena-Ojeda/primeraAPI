import { Request, Response } from 'express';
import { findUserById, getUsers, saveNewUser } from "../models/userModel.js";

export async function newUser(data: any):Promise<any>{
    try {
        const result = await saveNewUser(data);
        return result;
    } catch (error:any){
        if (error.code === "23505") {
            const columnMatch = error.detail.match(/Key \((.*?)\)=/);
            const columnName = columnMatch ? columnMatch[1] : 'campo';
            return `El ${columnName} ya existe en la base de datos`;
        }
        return error;
    }
}

export async function getAllUsers():Promise<string>{
    const result = await getUsers();
    return result;
}

export async function getUserById(id:string):Promise<string>{
    const result = await findUserById(id);
    return result;
}

/*export async function fetchUserById(req: Request, res: Response) {
    const userId = req.params.id;
    try {
        const user = await getUserById(userId);
        
        if (user) {
            let html = '<h1>Detalles del Usuario</h1>';
            html += '<table border="1"><tr><th>ID</th><th>Nombre</th><th>Email</th></tr>';
            html += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
            html += '</table>';
            
            res.send(html);
        } else {
            res.status(404).send('<h1>Usuario no encontrado</h1>');
        }
    } catch (error) {
        res.status(500).send('<h1>Error al obtener el usuario</h1>');
    }
}*/


/*export async function fetchAllUsers(req: Request, res: Response) {
    try {
        const users = await getAllUsers();
        
        let html = '<h1>Lista de Usuarios</h1>';
        html += '<table border="1"><tr><th>ID</th><th>Nombre</th><th>Email</th></tr>';
        
        users.forEach((user: any) => {
            html += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
        });
        
        html += '</table>';
        
        res.send(html);
    } catch (error) {
        res.status(500).send('<h1>Error al obtener usuarios</h1>');
    }
}*/