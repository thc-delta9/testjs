const isEmptyObject = obj => Object.keys(obj).length === 0;
const buildOutputPath = path.join(repositoryRootPath, 'out');
const lastElement = arr => arr[arr.length - 1];