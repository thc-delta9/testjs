var DELIM_SIZE = 4;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);