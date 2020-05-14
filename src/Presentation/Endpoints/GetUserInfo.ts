import {JWTAuthentication} from '../../Utils/JWTAuthentication';
import {Request, Response} from 'express';
import {GetUserInfoUC} from '../../Business/Usecases/GetUserInfoUC';

export const getUserInfoEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(request.headers.auth as string)

        const useCase = new GetUserInfoUC()

        const input = {
            userId
        }

        const userInfo = await useCase.execute(input)

        response.send({user: userInfo})
    }
    catch(err) {
        response.status(500.).send({message: err.message})
    }
}