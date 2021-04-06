import nock from 'nock';
import { getBottlesForCellarId, createBottle } from '.';
import { aBottle } from '../../test/wine.factory';

const API_HOST = process.env.REACT_APP_API_BASE_PATH;

test('getBottlesForCellarId returns list of bottles', () => {
  const cellarId = 123;
  const bottlesResponse = [aBottle(), aBottle()];

  nock(API_HOST)
    .get('/bottles')
    .query((query) => query.cellarID === `${cellarId}`)
    .reply(200, bottlesResponse, {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    });

  return getBottlesForCellarId(123).then((bottles) =>
    expect(bottles).toEqual(bottlesResponse)
  );
});

test('createBottle posts a bottle and return its id', () => {
  const bottle = aBottle();
  const idResponse = { id: '' };
  nock(API_HOST).post('/bottles', bottle).reply(200, idResponse, {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  });

  return createBottle(bottle).then((id) => expect(id).toEqual(idResponse));
});
