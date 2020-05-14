import {Request, Response} from 'express';
import {SignupUC} from '../../Business/Usecases/SignupUC';

export const signupEndpoint = async (req: Request, res: Response) => {
    const useCase = new SignupUC()

    const input = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth
    }
    
    try {
        
        await useCase.execute(input)

        res.send("Usuário criado")
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}