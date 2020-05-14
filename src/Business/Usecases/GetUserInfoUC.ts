import{UserDB} from '../../Data/UserDB';

interface GetUserInfoInput {
    userId: string
}

interface GetUserInfoOutput {
    id: string
    email: string
}

export class GetUserInfoUC {
    async execute(input: GetUserInfoInput): Promise<GetUserInfoOutput> {
           const userDB = new UserDB()
           
           const user = await userDB.getUserById(input.userId)
           
           if(!user) {
               throw new Error("Usuário não encontrado")
           }
          
           return {
            id: user.getId(),
            email: user.getEmail()
           }
    }
        
}