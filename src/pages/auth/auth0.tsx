import React from 'react';
import { navigate, PageProps } from 'gatsby';
import queryString from 'query-string';
import { handleAuthentication } from '../../utils/auth';

const Auth0: React.FC<PageProps> = ({ location }) => {
  const navigateHome = () => navigate('/');
  const { access_token: accessToken } = queryString.parse(location.search);

  if (!accessToken) {
    navigateHome();
  } else {
    const token = typeof accessToken === 'string' ? accessToken : accessToken[0];
    handleAuthentication(token, navigateHome, navigateHome);
  }

  return (
    <div className="flex items-center w-screen h-screen justify-items-center">
      <p className="text-xl">Logging you in...</p>
    </div>
  );
};

export default Auth0;
