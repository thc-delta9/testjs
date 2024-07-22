const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
console.log("1 || 2 = "+(1 || 2));
const resultingPromises = urls.map((url) => makHttpRequest(url));