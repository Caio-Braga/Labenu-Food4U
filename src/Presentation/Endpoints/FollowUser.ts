import {JWTAuthentication} from '../../Utils/JWTAuthentication';
import {Request, Response} from 'express';
import {FollowUserUC} from '../../Business/Usecases/FollowUserUC';
import {UserDB} from '../../Data/UserDB';

export const followUserEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth = new JWTAuthentication()

        const userId = jwtAuth.verifyToken(request.headers.auth as string)

        const userDatabase =  new UserDB()

        const useCase = new FollowUserUC(userDatabase)

        const input = {
            userId,
            userToFollowId: request.body.userToFollowId
        }

        await useCase.execute(input)

        response.send({message: "Usuário seguido com sucesso"})
    }
    catch(e) {
        response.status(500.).send({message: e.message})
    }
}