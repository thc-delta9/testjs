console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const stringReverse = str => str.split("").reverse().join("");