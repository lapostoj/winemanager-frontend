const apiBasePath = process.env.REACT_APP_API_BASE_PATH;

export function getCellarsForAccountId(accountId) {
  const url = `${apiBasePath}/cellars?accountID=${accountId}`;
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
    }),
    mode: 'cors',
    cache: 'no-cache',
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.json());
  });
}

export function createCellar(cellar) {
  const url = `${apiBasePath}/cellars`;
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
    }),
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(cellar),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.json());
  });
}
