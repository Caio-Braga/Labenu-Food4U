import {Request, Response} from 'express';
import {JWTAuthentication} from '../../Utils/JWTAuthentication';
import {GetFeedUC} from '../../Business/Usecases/GetFeedUC';
import {FeedDB} from '../../Data/FeedDB';

export const getFeedEndpoint = async (req: Request, res: Response) => {
    try{
        const jwtAuth = new JWTAuthentication()

        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const feedDB = new FeedDB()

        const useCase = new GetFeedUC(feedDB)

        const input = {
            userId
        }

        const recipes = await useCase.execute(input)

        res.send({recipes})

    } catch(err){
        res.status(500).send({message: err.message})
    }
}