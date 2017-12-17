import {
  compareStrings,
  compareNumbers
} from '../utils/sorting'

const getCountries = state => state.countries.countries

const getCountriesEnglish = state => state.countries.countriesEnglish

const getCurrentCountry = state => state.countries.currentCountry

const getBorderCountries = (state, selectedCountry) => (
  getCountries(state).filter(country => country.borders.includes(selectedCountry.alpha3Code))
)

const sortCountriesByName = (state, order) => (
  getCountries(state).sort(compareStrings('name', order))
)

const sortCountriesByPopulation = (state, order) => (
  getCountries(state).sort(compareNumbers('population', order))
)

const sortCountriesByArea = (state, order) => (
  getCountries(state).sort(compareNumbers('area', order))
)

const sortCountriesByEnglish = (state) => (
  getCountries(state).filter(country => {
    const languages = country.languages.map(language => language.name)
    return languages.includes('English')
  })
)

const sortBy = state => state.countries.sorting.sortBy

const sortingOrder = state => state.countries.sorting.order

export {
  getCountries,
  getCountriesEnglish,
  getCurrentCountry,
  getBorderCountries,
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByArea,
  sortCountriesByEnglish,
  sortBy,
  sortingOrder
}
