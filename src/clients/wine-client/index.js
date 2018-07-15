const apiBasePath = process.env.REACT_APP_API_BASE_PATH;

export function getWines() {
  const url = `${apiBasePath}/wines`;
  return fetch(url, {
    method: 'GET', 
    headers: new Headers({
      'Accept': 'application/json',
    }),
    mode: 'cors',
    cache: 'no-cache',
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.json());
  });
}

export function uploadFile(data) {
  const url = `${apiBasePath}/import`;
  return fetch(url, {
    method: 'POST', 
    headers: new Headers({
      'Accept': 'application/json',
    }),
    mode: 'cors',
    cache: 'default',
    body: data,
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.json());
  });
}