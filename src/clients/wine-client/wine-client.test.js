import nock from 'nock';
import { getWines, uploadFile } from '.';

const API_HOST = process.env.REACT_APP_API_BASE_PATH;

describe('getWines', () => {
  it('returns list of wines', () => {
    nock(API_HOST)
      .get('/wines')
      .reply(
        200,
        [{}, {}],
        {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      );

    return getWines()
    .then(
      (wines) => expect(wines).toHaveLength(2)
    );
  });
});

describe('uploadFile', () => {
  it('returns list of wines', () => {
    const data = { name: 'filename', file: 'file' };
    nock(API_HOST)
      .post('/import', data)
      .reply(
        200,
        [{}, {}],
        {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      );

    return uploadFile(JSON.stringify(data))
    .then(
      (wines) => expect(wines).toHaveLength(2)
    );
  });
});