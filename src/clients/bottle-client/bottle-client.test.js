import nock from 'nock';
import { getBottlesForCellarId, createBottle } from '.';

const API_HOST = process.env.REACT_APP_API_BASE_PATH;

describe('getBottlesForCellarId', () => {
  it('returns list of bottles', () => {
    const cellarId = 123;
    const cellarsResponse = [{}, {}];

    nock(API_HOST)
      .get(`/bottles?cellarID=${cellarId}`)
      .reply(200, cellarsResponse, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      });

    return getBottlesForCellarId(123).then(bottles =>
      expect(bottles).toEqual(cellarsResponse)
    );
  });
});

describe('createBottle', () => {
  it('post a bottle and return its id', () => {
    const bottle = { name: 'filename', file: 'file' };
    const idResponse = { id: '' };
    nock(API_HOST)
      .post('/bottles', bottle)
      .reply(200, idResponse, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      });

    return createBottle(bottle).then(id => expect(id).toEqual(idResponse));
  });
});
