const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);