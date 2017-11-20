import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCountiresRequest } from './actions/countries'
import { getCountries } from './selectors/countries'

class App extends Component {
  static propTypes = {
    getCountiresRequest: PropTypes.func
  }

  componentWillMount () {
    this.props.getCountiresRequest()
  }

  render () {
    return (
      <div>
        <p>test</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: getCountries(state)
})

const mapDispatchToProps = dispatch => {
  return {
    getCountiresRequest: () => dispatch(getCountiresRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
