import { saveNewUser } from "../models/userModel.js";

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