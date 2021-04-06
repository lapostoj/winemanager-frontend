import nock from 'nock';
import { getWines, uploadFile } from '.';

const API_HOST = process.env.REACT_APP_API_BASE_PATH;

test('getWines returns list of wines', () => {
  const winesResponse = [{}, {}];

  nock(API_HOST)
    .get('/wines')
    .query((query) => true)
    .reply(200, winesResponse, {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    });

  return getWines().then((wines) => expect(wines).toEqual(winesResponse));
});

test('uploadFile posts a file and return the created wines', () => {
  const data = { name: 'filename', file: 'file' };
  const winesResponse = [{}, {}];

  nock(API_HOST).post('/import', data).reply(200, winesResponse, {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  });

  return uploadFile(JSON.stringify(data)).then((wines) =>
    expect(wines).toEqual(winesResponse)
  );
});
