import { fetchWithCredentials } from './fetch';

export async function getCalendars() {
  const body = await fetchWithCredentials(
    `${process.env.SERVER_URL}/calendars`
  ).then((res) => res.json());
  return body;
}
