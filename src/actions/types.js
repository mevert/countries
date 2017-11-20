import keyMirror from 'keymirror'

const countriesActionTypes = keyMirror({
  COUNTRIES__GET: null,
  COUNTRIES__GET_SUCCEEDED: null,
  COUNTRIES__GET_FAILED: null
})

export default {
  ...countriesActionTypes
}
