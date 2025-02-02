export { signOut,  } from './authActions'
export {monthlyInvoiceDetails, toWordsCustom, currencyFormat } from './invoiceHelpers'
export { createCompany } from './company'
import { generators } from 'openid-client';

export const ISSUER = process.env.NEXT_PUBLIC_ISSUER
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI


export const generatePKCE = () => {
    const codeVerifier = generators.codeVerifier();
    const codeChallenge = generators.codeChallenge(codeVerifier);
    localStorage.setItem('codeVerifier', codeVerifier);
    return { codeChallenge, codeVerifier };
  }

export const buildAuthUrl =  (codeChallenge: string) => {

const authUrl = `${ISSUER}?&client_id=${CLIENT_ID}&code_challenge=${codeChallenge}&response_type=code&code_challenge_method=S256&redirect_uri=${REDIRECT_URI}`

console.log("auth url => ", authUrl)

return authUrl;

}
