import {Request, Response} from 'express';
import {JWTAuthentication} from '../../Utils/JWTAuthentication';
import {RecipeDB} from '../../Data/RecipeDB';
import {RecipeUC} from '../../Business/Usecases/RecipeUC';

export const getRecipesEndpoint = async (req: Request, res: Response) => {
    try{
        const jwtAuth = new JWTAuthentication()

        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const recipeDB = new RecipeDB()

        const useCase = new RecipeUC(recipeDB)

        const input = {
            userId,
            title: req.body.title,
            description: req.body.description,
        }

        const userInfo = await useCase.execute(input)

        res.send({user: userInfo})

    } catch(err){
        res.status(500).send({message: err.message})
    }
}