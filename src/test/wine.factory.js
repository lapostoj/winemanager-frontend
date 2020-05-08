export function aWine(color = 'RED') {
  return {
    name: 'Test Wine',
    designation: 'Test Designation',
    growth: 'Test Growth',
    country: 'FR',
    region: 'Bourgogne',
    color: 'RED',
    type: 'SEC',
    producer: 'Test Producer',
  };
}

export function aBottle() {
  return {
    year: 1963,
    size: 'BOTTLE',
    quantity: 3,
    cellarID: 5662025548038144,
    wine: aWine(),
    history: [
      {
        time: '2019-07-28 14:31:36.90297 +0100 BST',
        quantity: 3,
        details: 'Adding bottle to stock',
      },
    ],
    storageLocation: {
      position: 'There',
    },
  };
}

export function aCellar() {
  return {
    name: 'Cellar Test',
    accountID: 1,
    creationTime: '2019-07-28 10:40:58.213625 +0100 BST',
  };
}
