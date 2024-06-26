const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);