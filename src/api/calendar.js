import { fetchWithDefaults } from './fetch';

const CALENDARS_ENDPOINT = `${process.env.SERVER_URL}/calendars`;

export async function getCalendars() {
  return fetchWithDefaults(CALENDARS_ENDPOINT);
}

export async function updateCalendar(id, body) {
  return await fetchWithDefaults(`${CALENDARS_ENDPOINT}/${id}`, {
    method: 'PATCH',
    body: body,
  });
}
