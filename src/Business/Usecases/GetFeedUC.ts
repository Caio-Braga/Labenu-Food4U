import {FeedGateway} from '../Gateways/FeedGateway';

interface GetFeedInput {
    userId: string
}

interface GetFeedOutput {
    recipeId: string
    title: string
    description: string
    creationDate: number
    userRmail: string
}

export class GetFeedUC {
    constructor(private feedGateway: FeedGateway){}

    async execute(input: GetFeedInput): Promise<GetFeedOutput[]> {
        const recipes = await this.feedGateway.getFeedForUser(input.userId)

        return recipes.map(recipe =>{
            return {
                recipeId: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                creationDate: recipe.getCreationDate().getTime(),
                userRmail: recipe.getEmail()
            }
        })
    }
}