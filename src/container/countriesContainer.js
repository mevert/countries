import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

import Countries from '../components/countries'
import Country from '../components/country'

import {
  getCountriesRequest,
  setCurrentCountry,
  sortCountries
} from '../actions/countries'

import {
  getCountries,
  getCurrentCountry,
  sortBy
} from '../selectors/countries'

const sortByText = {
  marginLeft: '15px'
}

class CountriesContainer extends Component {
  static propTypes = {
    getCountriesRequest: PropTypes.func,
    setCurrentCountry: PropTypes.func,
    sortCountries: PropTypes.func,
    currentCountry: PropTypes.shape({
      name: PropTypes.string
    }),
    countries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    sortBy: PropTypes.string
  }

  componentWillMount = () => {
    this.props.getCountriesRequest()
  }

  render () {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} >
            <Button
              color='primary'
              onClick={() => this.props.sortCountries('name')}
            >
              Sort by name
            </Button>
            <Button
              color='primary'
              onClick={() => this.props.sortCountries('population')}
            >
              Sort by population
            </Button>
            <Button
              color='primary'
              onClick={() => this.props.sortCountries('area')}
            >
              Sort by area
            </Button>
            <Button
              color='primary'
              onClick={() => this.props.sortCountries('english')}
            >
              Only english speaking countries
            </Button>
            <p style={sortByText}>{ this.props.sortBy ? `Sort by ${this.props.sortBy}` : '' }</p>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={12} sm={4} >
            <Countries
              countries={this.props.countries}
              setCurrentCountry={this.props.setCurrentCountry}
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Country
              country={this.props.currentCountry}
              setCurrentCountry={this.props.setCurrentCountry}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: getCountries(state),
  currentCountry: getCurrentCountry(state),
  sortBy: sortBy(state)
})

const mapDispatchToProps = dispatch => {
  return {
    getCountriesRequest: () => dispatch(getCountriesRequest()),
    setCurrentCountry: (country) => dispatch(setCurrentCountry(country)),
    sortCountries: (sortBy) => dispatch(sortCountries(sortBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer)
