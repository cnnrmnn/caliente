import { fetchWithDefaults } from './fetch';

export async function me() {
  return fetchWithDefaults(`${process.env.SERVER_URL}/users/me`);
}
