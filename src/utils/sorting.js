
const isValidKeys = (key, a, b) =>
  (a.hasOwnProperty(key) || b.hasOwnProperty(key))

const compareStrings = (key, order) => (a, b) => {
  if (!isValidKeys(key, a, b)) {
    return 0
  }
  // sorting strings with non-ASCII characters
  const c = a[key].toUpperCase().localeCompare(b[key].toUpperCase())
  // ascending order by default
  return (order === 'desc') ? (c * -1) : c
}

const compareNumbers = (key, order) => (a, b) => {
  if (!isValidKeys(key, a, b)) {
    return 0
  }
  const c = a[key] - b[key]
  // ascending order by default
  return (order === 'desc') ? (c * -1) : c
}

export {
  compareStrings,
  compareNumbers
}
