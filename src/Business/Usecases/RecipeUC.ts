import {v4} from "uuid";
import {Recipe} from '../Entities/Recipe';
import {RecipeGateway} from '../Gateways/RecipeGateway';

interface CreateRecipeInput {
    title: string,
    description: string,
    userId: string
}

export class RecipeUC {
    constructor(private recipeGateway: RecipeGateway) {}
    
    async execute(input: CreateRecipeInput) {
        const recipeId = this.generateRecipeTd()

        const newRecipe = new Recipe(
            recipeId,
            input.title,
            input.description,
            new Date(),
            input.userId
        )

        await this.recipeGateway.createRecipe(newRecipe)
    }

    private generateRecipeTd() {
        return v4()
    }

}