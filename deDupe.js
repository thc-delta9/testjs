const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const goToTop = () => window.scrollTo(0, 0);