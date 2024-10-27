import { saveUser } from "../model/userModel.js";

export async function saveUserHandler(data: any):Promise<any>{
    const result = await saveUser(data);
    return result;
}