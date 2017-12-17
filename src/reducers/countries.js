import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/types'

const initialState = {
  countries: [],
  currentCountry: undefined,
  sorting: {
    sortBy: undefined,
    order: 'asc'
  }
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
  },
  [ActionTypes.COUNTRIES__SET_ENGLISH]: {
    next (state, action) {
      return {
        ...state,
        countriesEnglish: action.payload
      }
    }
  },
  [ActionTypes.COUNTRIES__SET_CURRENT_COUNTRY]: {
    next (state, action) {
      return {
        ...state,
        currentCountry: action.payload
      }
    }
  },
  [ActionTypes.COUNTRIES__SET_CURRENT_COUNTRY_FAILED]: {
    next (state, action) {
      return {
        ...state,
        currentCountry: {
          ...state.currentCountry,
          borderCountries: []
        },
        error: action.payload
      }
    }
  },
  [ActionTypes.COUNTRIES__SET_CURRENT_COUNTRY_BORDERS]: {
    next (state, action) {
      return {
        ...state,
        currentCountry: {
          ...state.currentCountry,
          borderCountries: action.payload
        }
      }
    }
  },
  [ActionTypes.COUNTRIES__SORT]: {
    next (state, action) {
      return {
        ...state,
        sorting: {
          ...state.sorting,
          sortBy: action.payload
        }
      }
    }
  },
  [ActionTypes.COUNTRIES__SET_SORTED]: {
    next (state, action) {
      return {
        ...state,
        countries: action.payload
      }
    }
  },
  [ActionTypes.COUNTRIES__CHANGE_ORDER]: {
    next (state, action) {
      return {
        ...state,
        sorting: {
          ...state.sorting,
          order: (state.sorting.order === 'asc' ? 'desc' : 'asc')
        }
      }
    }
  }
}, initialState)

export default countries
