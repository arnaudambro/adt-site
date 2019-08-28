const windowPathNameIs = (path) => {
  if (window.location.origin.includes('ambroselli.io')) {
    return window.location.pathname === '/adt' + path
  }
  return window.location.pathname === path
}

export default windowPathNameIs
