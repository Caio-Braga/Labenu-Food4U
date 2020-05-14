import * as bcrypt from 'bcrypt';
import {UserDB} from '../../Data/UserDB';
import {JWTAuthentication} from '../../Utils/JWTAuthentication';

interface LoginInput {
    email: string
    password: string
}

export class LoginUC {
    async execute(input: LoginInput) {
        
        const userDB = new UserDB()

        const user = await userDB.getUserByEmail(input.email)

        if(!user) {
            throw new Error("Email incorreto")
        }

        const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if(!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const jwtAuth = new JWTAuthentication()
        const token = jwtAuth.generateToken(user.getId())

        return token

    } 
        
}