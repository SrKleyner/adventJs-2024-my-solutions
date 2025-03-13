function organizeInventory(inventory) {
  const organaizedInventory = inventory.reduce((globalObject, { name, quantity, category }) => {

    globalObject[category] ??= {};

    globalObject[category][name] = ~~globalObject[category][name] + quantity

    return globalObject;
  }, {});
  return organaizedInventory;
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))