import { fetchWithDefaults } from './fetch';

const USERS_ENDPOINT = `${process.env.SERVER_URL}/users/me`;
export async function me() {
  return fetchWithDefaults(USERS_ENDPOINT);
}

export async function updateUser(id, body) {
  return fetchWithDefaults(`${USERS_ENDPOINT}`, {
    method: 'PATCH',
    body: body,
  });
}

export async function logOut() {
  // Returns no content so no JSON to parse
  return fetch(`${USERS_ENDPOINT}/logout`, {
    credentials: 'include',
    mode: 'cors',
  });
}
