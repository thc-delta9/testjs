const channel = getChannel(computedAppVersion);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const merge = [...new Set(a.concat(b))];