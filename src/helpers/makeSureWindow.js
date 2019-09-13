const makeSureWindow = () => {
  if (typeof window === 'undefined') return { showWelcomePage: false };
  return window;
}

export default makeSureWindow
