/** The user data as returned from strapi auth. */
export interface AuthUser {
  id: number;
  blocked: boolean;
  confitmed: boolean;
  email: string;
  username: string;
}

/** Data stored in authentication state. */
export interface AuthData {
  isLoggedIn: boolean;
  jwt?: string;
  user?: AuthUser;
}

/** Authentiation data. */
export interface Auth {
  isLoggedIn: boolean;
  jwt?: string;
  user?: AuthUser;
  login: () => void;
  logout: () => void;
}
