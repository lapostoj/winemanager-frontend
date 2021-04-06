import nock from 'nock';
import { getCellarsForAccountId, createCellar } from '.';
import { aCellar } from '../../test/wine.factory';

const API_HOST = process.env.REACT_APP_API_BASE_PATH;

test('getCellarsForAccountId returns list of bottles', () => {
  const accountID = 123;
  const cellarsResponse = [aCellar(), aCellar()];

  nock(API_HOST)
    .get('/cellars')
    .query((query) => query.accountID === `${accountID}`)
    .reply(200, cellarsResponse, {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    });

  return getCellarsForAccountId(123).then((cellars) =>
    expect(cellars).toEqual(cellarsResponse)
  );
});

test('createCellar posts a cellar and return its id', () => {
  const cellar = aCellar();
  const idResponse = { id: '' };
  nock(API_HOST).post('/cellars', cellar).reply(200, idResponse, {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  });

  return createCellar(cellar).then((id) => expect(id).toEqual(idResponse));
});
