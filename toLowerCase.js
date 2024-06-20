const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const removeDuplicates = (arr) => [...new Set(arr)];
const isEmptyArray = arr => !arr.length;