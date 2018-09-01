export function aWine(color = 'RED') {
  return {
    color,
    name: 'Wine',
    bottles: [
      aBottle(),
    ],
  };
}

export function aBottle() {
  return {
    size: 'BOTTLE',
    year: 2003,
    quantity: 2,
  };
}