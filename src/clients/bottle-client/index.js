const apiBasePath = process.env.REACT_APP_API_BASE_PATH;

export function getBottlesForCellarId(cellarId) {
  const url = `${apiBasePath}/bottles?cellarID=${cellarId}`;
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json'
    }),
    mode: 'cors',
    cache: 'no-cache'
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.json());
  });
}

export function createBottle(bottle) {
  const url = `${apiBasePath}/bottles`;
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json'
    }),
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(bottle)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.json());
  });
}
