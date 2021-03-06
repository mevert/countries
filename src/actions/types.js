import keyMirror from 'keymirror'

const countriesActionTypes = keyMirror({
  COUNTRIES__GET: null,
  COUNTRIES__GET_SUCCEEDED: null,
  COUNTRIES__GET_FAILED: null,
  COUNTRIES__SET_CURRENT_COUNTRY: null,
  COUNTRIES__SET_CURRENT_COUNTRY_FAILED: null,
  COUNTRIES__SET_CURRENT_COUNTRY_BORDERS: null,
  COUNTRIES__SORT: null,
  COUNTRIES__SET_SORTED: null,
  COUNTRIES__SET_ENGLISH: null,
  COUNTRIES__CHANGE_ORDER: null
})

export default {
  ...countriesActionTypes
}
