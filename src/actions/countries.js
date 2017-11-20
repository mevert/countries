import { createAction } from 'redux-actions'
import ActionTypes from './types'

const getCountiresRequest = createAction(ActionTypes.COUNTRIES__GET)
const getCountiresSucceeded = createAction(ActionTypes.COUNTRIES__GET_SUCCEEDED)
const getCountiresFailed = createAction(ActionTypes.COUNTRIES__GET_FAILED)

export {
  getCountiresRequest,
  getCountiresSucceeded,
  getCountiresFailed
}
