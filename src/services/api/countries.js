import config from '../../config'

const countries = config.api.countries

const fetchCountries = () => {
  return fetch(countries.all)
    .then(response => response.json())
}

export {
  fetchCountries
}
