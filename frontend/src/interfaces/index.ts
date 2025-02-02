export interface ISession<T = any > {
    user?: T,
    data?: {
        user: T
    },
    _token?: string
} 

export interface ICompany {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    nip: string,
    ownership?: string | boolean,
}


export interface IContract {
    id: string,
    type: string,
    clientNip: string,
    nip: string,
    wagesPerHour: number,
    dailyHours: number,
    duration: number,
    signature: string,
    isEnabled: boolean,
    refNumber: string,
    userId: string,
    companyId: string,
    createdAt: string,
    updatedAt: string
}