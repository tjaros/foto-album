import React, { useEffect, useState } from 'react';
import { navigate, PageProps } from 'gatsby';
import { useSetRecoilState } from 'recoil';
import {
  clearData, getData, storeData, Tokens
} from '../../auth/cookies';
import isLoggedInState from '../../auth/store';
import { AuthUser } from '../../auth/models';

interface StrapiAuthResponse {
  jwt: string;
  user: AuthUser;
}

const Auth0: React.FC<PageProps> = ({ location }) => {
  const setLogged = useSetRecoilState(isLoggedInState);
  const [correctAuth, setCorrectAuth] = useState<boolean>(true);

  useEffect(() => {
    const strapiCallback = `${process.env.STRAPI_BACKEND}/auth/auth0/callback${location.search}`;
    fetch(strapiCallback)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res: StrapiAuthResponse) => {
        storeData(Tokens.JWT, res.jwt);
        storeData(Tokens.USER, JSON.stringify(res.user));
        setLogged(true);

        const returnTo = getData(Tokens.LAST_LOCATION);
        // Handle gitlab server path by navigating with absolut url
        if (returnTo) window.location.replace(getData(Tokens.LAST_LOCATION) || '/');
        else navigate(getData(Tokens.LAST_LOCATION) || '/');
      })
      .catch(() => {
        setLogged(false);
        clearData(Tokens.JWT);
        clearData(Tokens.USER);
        setCorrectAuth(false);
      });
  }, [location.search, setLogged]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col pb-4 mx-6 border shadow justify-items-center">
        <p className="p-4 text-xl font-semibold tracking-tight text-center text-white bg-black">
          LOGO
        </p>
        <p className="m-6 text-xl text-center">
          {correctAuth
            ? 'Logging you in...'
            : 'Error during authentication. Click below to continue not logged in.'}
        </p>
        {!correctAuth && (
          <button
            type="button"
            onClick={() => navigate('/')}
            className="p-3 m-auto text-white bg-black rounded">
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth0;
