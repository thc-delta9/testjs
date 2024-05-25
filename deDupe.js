console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isEmptyObject = obj => Object.keys(obj).length === 0;