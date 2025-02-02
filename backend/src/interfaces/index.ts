export interface IAccount {
    type: string,
    provider: string,
    providerAccountId: string,
    token_type: string,
    scope: string,
}

export interface IUser {
    name: string,
    email: string,
    image: string
}