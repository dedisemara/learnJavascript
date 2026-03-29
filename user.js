const idSymbol = Symbol('id')
const idSymbol1 = Symbol('id1')

const dedi = {
    [idSymbol]: 'DS0001',
    name: 'User Dedi',
    age: 20
};

const semara = {
    [idSymbol1]: 'DS0002',
    name: 'User semara',
    age: 20
};

module.exports = {
  dedi,
  semara
};