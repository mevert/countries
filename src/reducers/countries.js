import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/types'

const initialState = {
  countries: []
}

const countries = handleActions({
  [ActionTypes.COUNTRIES__GET]: {
    next (state, action) {
      return {
        ...state
      }
    }
  },
  [ActionTypes.COUNTRIES__GET_SUCCEEDED]: {
    next (state, action) {
      return {
        ...state,
        countries: action.payload
      }
    }
  },
  [ActionTypes.COUNTRIES__GET_FAILED]: {
    next (state, action) {
      return {
        ...state,
        error: action.payload
      }
    }
  }
}, initialState)

export default countries
