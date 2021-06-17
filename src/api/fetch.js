export function fetchWithCredentials(resource, init) {
  const corsDefaults = { mode: 'cors', credentials: 'include' };
  if (init) init = init.assign(corsDefaults);
  else init = corsDefaults;
  return fetch(resource, init);
}
