export function fetchWithDefaults(resource, init) {
  const defaults = {
    mode: 'cors',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  };
  if (init) init = Object.assign(defaults, init);
  else init = defaults;

  if (init.body) init.body = JSON.stringify(init.body);
  return fetch(resource, init).then((res) => res.json());
}
