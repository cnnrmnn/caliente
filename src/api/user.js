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
