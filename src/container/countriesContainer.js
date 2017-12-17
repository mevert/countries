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
  sortCountries,
  changeCountriesOrder
} from '../actions/countries'

import {
  getCountries,
  getCountriesEnglish,
  getCurrentCountry,
  sortBy,
  sortingOrder
} from '../selectors/countries'

const sortByText = {
  marginLeft: '15px'
}

const countriesStyle = {
  margin: '15px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, 0.12)'
}

class CountriesContainer extends Component {
  static propTypes = {
    getCountriesRequest: PropTypes.func,
    setCurrentCountry: PropTypes.func,
    sortCountries: PropTypes.func,
    changeOrder: PropTypes.func,
    currentCountry: PropTypes.shape({
      name: PropTypes.string
    }),
    countries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    countriesEnglish: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    sortBy: PropTypes.string,
    order: PropTypes.string
  }

  componentWillMount = () => {
    this.props.getCountriesRequest()
    this.props.sortCountries('name')
  }

  changeOrder = () => {
    this.props.changeOrder()
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
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={12} sm={6} >
            <Country
              country={this.props.currentCountry}
              setCurrentCountry={this.props.setCurrentCountry}
            />
          </Grid>
          <Grid item xs={12} sm={4} style={countriesStyle} >
            <Grid container>
              <Grid item sm={6} >
                <p style={sortByText}>{ this.props.sortBy ? `Sort by: ${this.props.sortBy}` : 'Sort by: none' }</p>
              </Grid>
              <Grid item sm={6} >
                {
                  (this.props.sortBy !== 'english') &&
                    <Button
                      color='primary'
                      onClick={this.changeOrder}
                    >
                      Order: {this.props.order}
                    </Button>
                }
              </Grid>
            </Grid>
            <Divider />
            <Countries
              countries={this.props.sortBy === 'english'
                ? this.props.countriesEnglish
                : this.props.countries}
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
  countriesEnglish: getCountriesEnglish(state),
  currentCountry: getCurrentCountry(state),
  sortBy: sortBy(state),
  order: sortingOrder(state)
})

const mapDispatchToProps = dispatch => {
  return {
    getCountriesRequest: () => dispatch(getCountriesRequest()),
    setCurrentCountry: (country) => dispatch(setCurrentCountry(country)),
    sortCountries: (sortBy) => dispatch(sortCountries(sortBy)),
    changeOrder: () => dispatch(changeCountriesOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer)
