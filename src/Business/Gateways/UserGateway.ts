export interface UserGateway {
    createUserFollowRelation(
        followerId: string,
        followedId: string
        ): Promise<void>
}