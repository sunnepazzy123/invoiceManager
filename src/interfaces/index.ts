export interface ISession<T = any > {
    user?: T,
    data?: {
        user: T
    }
} 