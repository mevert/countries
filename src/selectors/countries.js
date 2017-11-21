import {
  compareArea,
  compareName,
  comparePopulation
} from '../utils/sorting'

const getCountries = state => state.countries.countries

const getCountriesEnglish = state => state.countries.countriesEnglish

const getCurrentCountry = state => state.countries.currentCountry

const getBorderCountries = (state, selectedCountry) => (
  getCountries(state).filter(country => country.borders.includes(selectedCountry.alpha3Code))
)

const sortCountriesByName = state => (
  getCountries(state).sort(compareName)
)

const sortCountriesByPopulation = state => (
  getCountries(state).sort(comparePopulation)
)

const sortCountriesByArea = state => (
  getCountries(state).sort(compareArea)
)

const sortCountriesByEnglish = (state) => (
  getCountries(state).filter(country => {
    const languages = country.languages.map(language => language.name)
    return languages.includes('English')
  })
)

const sortBy = state => state.countries.sorting.sortBy

export {
  getCountries,
  getCountriesEnglish,
  getCurrentCountry,
  getBorderCountries,
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByArea,
  sortCountriesByEnglish,
  sortBy
}
