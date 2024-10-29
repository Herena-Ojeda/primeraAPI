import { saveNewUser } from "../models/userModel.js";

export async function newUser(data: any):Promise<any>{
    const result = await saveNewUser(data);
    return result;
}