import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemText } from 'material-ui/List'

const listStyle = {
  overflow: 'auto',
  'maxHeight': '600px'
}

class Countries extends Component {
  static propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    setCurrentCountry: PropTypes.func
  }

  renderCountriesList = (countries) => {
    return countries.map(
      country => (
        <ListItem
          onClick={() => this.props.setCurrentCountry(country)}
          button
          key={`item-${country.alpha3Code}`}
        >
          <ListItemText primary={country.name} />
        </ListItem>
      )
    )
  }

  render () {
    return (
      <div style={listStyle}>
        <List>
          {this.renderCountriesList(this.props.countries)}
        </List>
      </div>
    )
  }
}

export default Countries
