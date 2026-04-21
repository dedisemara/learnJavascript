const count = 1e6;

const obj = {};

console.time('Object Write');

for (let i = 0; i < count; i++){
    obj['key-' + i] = i;
}

console.timeEnd('Object Write');

console.time('Object Read');

for (let i = 0; i < count; i++){
    const val = obj['key-' + i]
}

console.timeEnd('Object Read');

// -------------------------------MAP TESTING----------------------------------

const map = new Map();

console.time('Map Write');

for (let i = 0; i < count; i++){
    map.set('key-' + i, i);
}

console.timeEnd('Map Write');

console.time('Map Read');

for (let i = 0; i < count; i++){
    const val = map.get('key-' + i);
}

console.timeEnd('Map Read');

// map is more faster than object
// if we use add, shorting, deleting object is slowly than map
// but object is more simple to code and usable if we not using so many method