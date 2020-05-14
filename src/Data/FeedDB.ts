import {Recipe} from '../Business/Entities/Recipe';
import {BaseDB} from './BaseDB';
import {FeedGateway} from '../Business/Gateways/FeedGateway';

export class FeedDB extends BaseDB implements FeedGateway {

    async getFeedForUser(userId: string): Promise<Recipe[]>{
        
       const response = await this.connection.raw(`SELECT 
                        recipes.*, people.email
                        FROM
                        users_relations
                            JOIN
                        people ON users_relations.followed_id = people.id
                            JOIN
                        recipes ON users_relations.followed_id = recipes.userId
                        WHERE
                        follower_id = '${userId}'
                        ORDER BY recipes.creationDate DESC;`)

        return response[0].map((recipe: any) =>{
            const newRecipe =  new Recipe(recipe.id, recipe.title, recipe.description, recipe.creationDate, recipe.userId)
            newRecipe.setEmail(recipe.email)
            return newRecipe
        });
        
    }
}