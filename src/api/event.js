import { fetchWithDefaults } from './fetch';

const EVENTS_ENDPOINT = `${process.env.SERVER_URL}/events`;

export async function getEvents(min, max) {
  const requestUrl = new URL(EVENTS_ENDPOINT);
  requestUrl.searchParams.set('min', min);
  requestUrl.searchParams.set('max', max);

  const { durations } = await fetchWithDefaults(requestUrl);
  return durations;
}
