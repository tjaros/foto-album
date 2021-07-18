const TOKEN_KEY = 'token';

/** Stores token to local storage. */
export const setToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token);

/** Removes token from local storage. */
export const clearToken = (): void => localStorage.removeItem(TOKEN_KEY);

/** Access token from local storage. */
export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);
