
export const useWindowEvent = (event, callback) => {
  React.useEffect(() => {
    if (!window) return null;
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};
