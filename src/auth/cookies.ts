export enum Tokens {
  JWT = 'token',
  LAST_LOCATION = 'last-location',
  USER = 'user-data',
  NSFW = 'nsfw-allowed'
}

const isBrowser = () => typeof window !== undefined;

/** Saves data to persistent storage. */
export const storeData = (token: Tokens, value: string): void => {
  if (isBrowser()) localStorage.setItem(token, value);
};

/** Removes token from local storage. */
export const clearData = (token: Tokens): void => {
  if (isBrowser()) localStorage.removeItem(token);
};

/** Access token from local storage. */
export const getData = (token: Tokens): string | null => {
  if (isBrowser()) return localStorage.getItem(token);
  return null;
};
