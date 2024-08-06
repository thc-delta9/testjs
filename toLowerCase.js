const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const reversedString = str => str.split('').reverse().join('');