
const getCountries = state => state.countries.countries

const getCountriesEnglish = state => state.countries.countriesEnglish

const getCurrentCountry = state => state.countries.currentCountry

const getBorderCountries = (state, selectedCountry) => {
  const countries = getCountries(state)
  return countries.filter(country => country.borders.includes(selectedCountry.alpha3Code))
}

const getCountriesNames = (state, countries) => (
  countries.map(country => country.name)
)

// TODO add to own file
function compareArea (a, b) {
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

// TODO add to own file
function comparePopulation (a, b) {
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

// TODO add to own file
const compareNames = (a, b) => {
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

const sortCountriesByName = state => {
  const countries = getCountries(state)
  countries.sort(compareNames)
  return countries
}

const sortCountriesByPopulation = state => {
  const countries = getCountries(state)
  countries.sort(comparePopulation)
  return countries
}

const sortCountriesByArea = state => {
  const countries = getCountries(state)
  countries.sort(compareArea)
  return countries
}

const sortCountriesByEnglish = (state) => {
  const countries = getCountries(state)
  return countries.filter(country => {
    const languages = country.languages.map(language => language.name)
    return languages.includes('English')
  })
}

const sortBy = state => state.countries.sorting.sortBy

export {
  getCountries,
  getCountriesEnglish,
  getCurrentCountry,
  getBorderCountries,
  getCountriesNames,
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByArea,
  sortCountriesByEnglish,
  sortBy
}
