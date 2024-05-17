const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;