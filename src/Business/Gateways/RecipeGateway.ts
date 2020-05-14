import {Recipe} from '../Entities/Recipe';

export interface RecipeGateway {
    createRecipe(recipe: Recipe): Promise<void>
}