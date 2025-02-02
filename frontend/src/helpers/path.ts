export const paths = {
    homePage: () => {
        return '/'
    },
    profilePage: () => {
        return '/profile'
    },
    invoiceCreate: () => {
        return '/invoice/create'
    },
    aboutPage: () => {
        return '/about'
    },
    loginPage: () => {
        return '/auth'
    },
    agreementPage: () => {
        return '/contract-agreement'
    },
    contractPage: (path?: string) => {
        if(path) return `/contracts/${path}`;
        return '/contracts'
    },
    companyPage: (path?: string) => {
        if(path) return `/company/${path}`;
        return '/company';
    },

    companySelfPage: (path?: string) => {
        if(path) return `/company/${path}`;
        return '/company';
    },

    printInvoicePage: () => {
        return '/invoice'
    },

}

export const privateLinks = [
    {
        name: 'company',
        path: '/company'
    },
    {
        name: 'profile',
        path: '/profile'
    },
    {
        name: 'contracts',
        path: '/contracts'
    },
    {
        name: 'invoice',
        path: '/invoice'
    },
    {
        name: 'bank account',
        path: '/bank_account'
    },
]