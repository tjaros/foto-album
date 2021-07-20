const TOKEN_KEY = 'token';
const LAST_LOCATION_KEY = 'lastLocation';

/** Stores token to local storage. */
export const setToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token);

/** Removes token from local storage. */
export const clearToken = (): void => localStorage.removeItem(TOKEN_KEY);

/** Access token from local storage. */
export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);

/** Set last location to return to after log in. */
export const setLastLocation = (url: string): void => localStorage.setItem(LAST_LOCATION_KEY, url);

/** Return the last location. */
export const getLastLocation = (): string => localStorage.getItem(LAST_LOCATION_KEY) || './';
