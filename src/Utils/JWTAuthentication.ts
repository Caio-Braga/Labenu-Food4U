import * as jwt from "jsonwebtoken";

export class JWTAuthentication {
    private SECRET: string
    constructor() {
        const secret = process.env.JWT_SECRET
        if(!secret){
            throw new Error("Lembre-se de definir a variável de ambiente")
        }
        this.SECRET = secret
    }
    generateToken(userId: string) {
        return jwt.sign({userId}, this.SECRET, { expiresIn: "1h"})
    }

    verifyToken(token: string) {
        const data = jwt.verify(token, this.SECRET) as {userId: string}
    
        return data.userId
    }
}