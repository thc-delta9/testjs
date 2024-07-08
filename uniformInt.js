const scriptRootPath = path.join(repositoryRootPath, 'script');
const result = await makeHttpRequest(url);
const merge = (a, b) => [...a, ...b];