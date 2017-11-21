import { takeLatest, put, call, select } from 'redux-saga/effects'
import {
  getCountriesRequest,
  getCountiresSucceeded,
  getCountiresFailed,
  setCurrentCountry,
  setCurrentCountryBorders,
  sortCountries,
  setSortedCountries,
  setEnglishCountries
} from '../actions/countries'

import { fetchCountries } from '../services/api/countries'
import {
  getBorderCountries,
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByArea,
  sortCountriesByEnglish,
  getCountries
} from '../selectors/countries'

function * handleGetCountriesRequest () {
  try {
    const countries = yield call(fetchCountries)
    yield put(getCountiresSucceeded(countries))
    const englishCountries = yield select(sortCountriesByEnglish)
    yield put(setEnglishCountries(englishCountries))
  } catch (err) {
    yield put(getCountiresFailed(err.message))
  }
}

function * handleSetCurrentCountry (action) {
  const country = action.payload
  const borderCountries = yield select(getBorderCountries, country)
  yield put(setCurrentCountryBorders(borderCountries))
}

function * handleSortCountries (action) {
  const sortBy = action.payload
  let countries = yield select(getCountries)
  switch (sortBy) {
    case 'name':
      countries = yield select(sortCountriesByName)
      break
    case 'population':
      countries = yield select(sortCountriesByPopulation)
      break
    case 'area':
      countries = yield select(sortCountriesByArea)
      break
    default:
      break
  }
  yield put(setSortedCountries(countries))
}

function * watchGetCountriesRequest () {
  yield takeLatest(getCountriesRequest, handleGetCountriesRequest)
}

function * watchsetCurrentCountry () {
  yield takeLatest(setCurrentCountry, handleSetCurrentCountry)
}

function * watchSortCountries () {
  yield takeLatest(sortCountries, handleSortCountries)
}

export default [
  watchGetCountriesRequest,
  watchsetCurrentCountry,
  watchSortCountries
]
