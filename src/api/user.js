import { fetchWithCredentials } from './fetch';

export async function me() {
  const body = await fetchWithCredentials(
    `${process.env.SERVER_URL}/users/me`
  ).then((res) => res.json());
  return body.user;
}
