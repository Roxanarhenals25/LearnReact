import { ROLES } from "./roles.enum";

export class User {
    username = '';
    password = '';
    email = '';
    role = ROLES.USER

    constructor(username,password,email,role){
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}