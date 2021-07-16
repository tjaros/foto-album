const JWT = 'jwt';
const USERNAME = 'username';

/** External link to navigate to in order to authenticate. */
export const loginUrl = `${process.env.STRAPI_BACKEND}/connect/auth0`;

/** The user data as returnsed from strapi auth. */
export interface AuthUser {
  id: number;
  blocked: boolean;
  confitmed: boolean;
  email: string;
  username: string;
}

interface StrapiAUthResponse {
  jwt: string;
  user: AuthUser;
}

/** Handle authetication callback and set app state to logged in. */
export const handleAuthentication = async (
  accessToken: string,
  callback: () => void,
  err: () => void
): Promise<void> => {
  try {
    const strapiCallback = `${process.env.STRAPI_BACKEND}/auth/auth0/callback?access_token=${accessToken}`;
    const response = await fetch(strapiCallback);

    if (response.status !== 200) {
      throw new Error(`Couldn't login to Strapi. Status: ${response.status}`);
    }

    const parsedRes = await response.json() as StrapiAUthResponse;
    console.log(parsedRes);
    localStorage.setItem(JWT, parsedRes.jwt);
    localStorage.setItem(USERNAME, parsedRes.user.username);
    callback();
  } catch (e) {
    console.log(e);
    err();
  }
};

/** Return whether the user is logged in in this session. */
export const isLoggedIn = (): boolean => {
  const jwt = localStorage.getItem(JWT);
  const user = localStorage.getItem(USERNAME);
  return !!jwt && !!jwt.length && !!user && !!user.length;
};

/** Returns username and jwt token. */
export const authData = (): { username: string | null, jwt?: string | null } => ({
  username: localStorage.getItem(USERNAME),
  jwt: localStorage.getItem(JWT)
});

/** Log current user out. If no user is provided, do nothing. */
export const logout = (): void => {
  localStorage.removeItem(JWT);
  localStorage.removeItem(USERNAME);
  console.log('Log out');
};
