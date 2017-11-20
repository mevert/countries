import { takeLatest, put, call } from 'redux-saga/effects'
import {
  getCountiresRequest,
  getCountiresSucceeded,
  getCountiresFailed
} from '../actions/countries'

import { fetchCountries } from '../services/api/countries'

function * handleGetCountriesRequest () {
  try {
    const countries = yield call(fetchCountries)
    yield put(getCountiresSucceeded(countries))
  } catch (err) {
    yield put(getCountiresFailed(err.message))
  }
}

function * watchGetCountriesRequest () {
  yield takeLatest(getCountiresRequest, handleGetCountriesRequest)
}

export default [watchGetCountriesRequest]
