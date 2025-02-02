'use client';
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import axios from "axios";
import { CLIENT_ID, REDIRECT_URI, buildAuthUrl, generatePKCE } from "@/actions";

type OktaType = {
  url?: string;
};

const Okta: React.FC<OktaType> = () => {
  const searchParams = useSearchParams()!;
  const params = new URLSearchParams(searchParams as any);
  const code = params.get('code');
  const router = useRouter();

  console.log("auth code ", code);

  useEffect(() => {
    const getToken = async () => {
      try {
        const verifier = localStorage.getItem('codeVerifier');
        if (!code || !verifier) {
          console.log('Code or verifier is missing');
          return;
        }

        // back channel start
        const url = "https://dev-5waavhva.us.auth0.com/oauth/token";
        const body = {
          grant_type: 'authorization_code',
          code,
          redirect_uri: REDIRECT_URI,
          code_verifier: verifier,
          client_id: CLIENT_ID
        };

        const token = await axios.post(url, body);
        //  back channel start
        localStorage.setItem('token', JSON.stringify(token.data));
        console.log('Token received and stored successfully');
        // Redirect logic if needed
      //  await redirect('/company'); 
        router.push('/')
      } catch (error) {
        console.error('Error occurred during token retrieval:', error);
      }
    };

    if (code) {
      console.log("Auth code received:", code);
      getToken();
    }
  }, [code]);

  const authUrl = () => {
    const { codeChallenge } = generatePKCE();
    const url = buildAuthUrl(codeChallenge);
    window.location.href = url;
  };

  return (
    <div>
      <div className="card-body">
        <div className="form-control mt-6 gap-2">
          <button
            className="btn bg-black text-white hover:bg-[#162e22]"
            type="submit"
            onClick={authUrl}
          >
            Login with OKTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Okta;
