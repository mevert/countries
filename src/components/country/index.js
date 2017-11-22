import React, { Component } from 'react'
import PropTypes from 'prop-types'

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer'
}

const country = {
  textAlign: 'center'
}

class Country extends Component {
  static propTypes = {
    country: PropTypes.shape({
      name: PropTypes.string,
      flag: PropTypes.string,
      population: PropTypes.number,
      area: PropTypes.number,
      borderCountries: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
      }))
    }),
    setCurrentCountry: PropTypes.func
  }

  renderBorderCountries = (countries) => {
    return countries.map(
      country => (
        <p
          style={linkStyle}
          key={`border-${country.alpha3Code}`}
          onClick={() => this.props.setCurrentCountry(country)}
        >
          {country.name}
        </p>
      )
    )
  }

  render () {
    if (!this.props.country) {
      return (<p style={country}>Scroll and select country from the list</p>)
    }
    const { name, flag, population, area } = this.props.country
    return (
      <div style={country}>
        <h1>{name}</h1>
        <img alt={name} width={'200px'} src={flag} />
        <p>Area: {area}</p>
        <p>Population: {population}</p>
        <h2>Neighbors</h2>
        {this.renderBorderCountries(this.props.country.borderCountries)}
      </div>
    )
  }
}

export default Country
