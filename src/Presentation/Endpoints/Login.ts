import {Request, Response} from 'express';
import {LoginUC} from '../../Business/Usecases/LoginUC';

export const loginEndpoint = async (req: Request, res: Response) => {
    try {
        const loginUC = new LoginUC();
        const result = await loginUC.execute({
            email: req.body.email,
            password: req.body.password
        });

        res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: err.message,
            ...err
        });
    }
}