import {Recipe} from '../Entities/Recipe';

export interface FeedGateway {
    getFeedForUser(userId: string): Promise<Recipe[]>
}