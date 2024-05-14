const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const lastElement = arr => arr[arr.length - 1];
const currentDate = () => new Date().toLocaleDateString('en-US');