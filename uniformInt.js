const isWeekday = (date) => date.getDay() % 6 !== 0;
const results = await Promise.all(resultingPromises);
const buildOutputPath = path.join(repositoryRootPath, 'out');