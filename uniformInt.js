const stringReverse = str => str.split("").reverse().join("");
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const reversedString = str => str.split('').reverse().join('');