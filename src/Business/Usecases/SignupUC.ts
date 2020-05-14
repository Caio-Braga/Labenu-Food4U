import * as bcrypt from 'bcrypt';
import {v4} from 'uuid';
import {User} from '../Entities/User';
import {UserDB} from '../../Data/UserDB';

interface SignupInput {
    email: string
    password: string
    name: string
    dateOfBirth: Date
}

export class SignupUC {

    async execute(input: SignupInput) {
        try {
            const userId = v4()

            const hashPassword = await bcrypt.hash(input.password, 10)

            const newUser = new User(userId, input.email, hashPassword, input.name, input.dateOfBirth)

            const userDB = new UserDB()

            await userDB.createUser(newUser)
        } catch (e) {
            console.log(e)
            throw new Error("Problema ao criar usuário")
        }

    }
}