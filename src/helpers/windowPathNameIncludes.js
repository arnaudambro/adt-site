const windowPathNameIncludes = (path = '') => {
  const urlPaths = window.location.pathname
  .trim()
  .split('/')
  .filter(p => p)
  if (!path.length) return !urlPaths.length
  return urlPaths.find(p => p.includes(path)) ? true : false
}

export default windowPathNameIncludes
