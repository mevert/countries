import { createAction } from 'redux-actions'
import ActionTypes from './types'

const getCountriesRequest = createAction(ActionTypes.COUNTRIES__GET)
const getCountiresSucceeded = createAction(ActionTypes.COUNTRIES__GET_SUCCEEDED)
const getCountiresFailed = createAction(ActionTypes.COUNTRIES__GET_FAILED)

const setCurrentCountry = createAction(ActionTypes.COUNTRIES__SET_CURRENT_COUNTRY)
const setCurrentCountryFailed = createAction(ActionTypes.COUNTRIES__SET_CURRENT_COUNTRY_FAILED)
const setCurrentCountryBorders = createAction(ActionTypes.COUNTRIES__SET_CURRENT_COUNTRY_BORDERS)

const setEnglishCountries = createAction(ActionTypes.COUNTRIES__SET_ENGLISH)

const sortCountries = createAction(ActionTypes.COUNTRIES__SORT)
const setSortedCountries = createAction(ActionTypes.COUNTRIES__SET_SORTED)

export {
  getCountriesRequest,
  getCountiresSucceeded,
  getCountiresFailed,
  setCurrentCountry,
  setCurrentCountryFailed,
  setCurrentCountryBorders,
  setEnglishCountries,
  sortCountries,
  setSortedCountries
}
