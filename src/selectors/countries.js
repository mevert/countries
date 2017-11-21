
const getCountries = state => state.countries.countries

const getCurrentCountry = state => state.countries.currentCountry

const getBorderCountries = (state, selectedCountry) => {
  const countries = getCountries(state)
  return countries.filter(country => country.borders.includes(selectedCountry.alpha3Code))
}

const getCountriesNames = (state, countries) => (
  countries.map(country => country.name)
)

const compareStrings = (a, b) => {
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
  countries.sort(compareStrings)
  return countries
}

const sortCountriesByPopulation = state => state.countries.countries

const sortCountriesByArea = state => state.countries.countries

const sortCountriesByEnglish = state => state.countries.countries

const sortBy = state => state.countries.sorting.sortBy

export {
  getCountries,
  getCurrentCountry,
  getBorderCountries,
  getCountriesNames,
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByArea,
  sortCountriesByEnglish,
  sortBy
}
