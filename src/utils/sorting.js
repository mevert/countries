
const compareArea = (a, b) => {
  const numA = a.area
  const numB = b.area
  let comparison = 0
  if (numA < numB) {
    comparison = 1
  } else if (numB < numA) {
    comparison = -1
  }
  return comparison
}

const comparePopulation = (a, b) => {
  const numA = a.population
  const numB = b.population
  let comparison = 0
  if (numA < numB) {
    comparison = 1
  } else if (numB < numA) {
    comparison = -1
  }
  return comparison
}

const compareName = (a, b) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()
  let comparison = 0
  if (nameA > nameB) {
    comparison = 1
  } else if (nameA < nameB) {
    comparison = -1
  }
  return comparison
}

export {
  compareArea,
  comparePopulation,
  compareName
}