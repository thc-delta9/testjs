const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const merge = (a, b) => [...a, ...b];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);