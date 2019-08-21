const windowPathNameIs = (path) => {
  if (window.location.origin.includes('ambroselli.io')) {
    return window.location.pathName === '/adt' + path
  }
  return window.location.pathName === path
}

export default windowPathNameIs
