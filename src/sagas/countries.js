import { takeLatest, put, call, select } from 'redux-saga/effects'
import {
  getCountriesRequest,
  getCountiresSucceeded,
  getCountiresFailed,
  setCurrentCountry,
  setCurrentCountryBorders,
  sortCountries,
  setSortedCountries,
  setEnglishCountries,
  changeCountriesOrder
} from '../actions/countries'

import { fetchCountries } from '../services/api/countries'
import {
  getBorderCountries,
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByArea,
  sortCountriesByEnglish,
  getCountries,
  sortingOrder,
  sortBy
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
  const order = yield select(sortingOrder)
  let countries = yield select(getCountries)
  switch (sortBy) {
    case 'name':
      countries = yield select(sortCountriesByName, order)
      break
    case 'population':
      countries = yield select(sortCountriesByPopulation, order)
      break
    case 'area':
      countries = yield select(sortCountriesByArea, order)
      break
    default:
      break
  }
  yield put(setSortedCountries(countries))
}

function * handleChangeCountriesOrder (action) {
  const by = yield select(sortBy)
  yield put(sortCountries(by))
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

function * watchChangeCountriesOrder () {
  yield takeLatest(changeCountriesOrder, handleChangeCountriesOrder)
}

export default [
  watchGetCountriesRequest,
  watchsetCurrentCountry,
  watchSortCountries,
  watchChangeCountriesOrder
]
