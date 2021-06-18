import { fetchWithDefaults } from './fetch';

const COLORS_ENDPOINT = `${process.env.SERVER_URL}/colors`;

export async function getColors() {
  return fetchWithDefaults(COLORS_ENDPOINT);
}

export async function updateColor(id, body) {
  return await fetchWithDefaults(`${COLORS_ENDPOINT}/${id}`, {
    method: 'PATCH',
    body: body,
  });
}
