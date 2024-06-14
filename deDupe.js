const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const intermediateAppPath = path.join(buildOutputPath, 'app');