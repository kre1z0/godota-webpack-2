import React, { PropTypes } from 'react'
// ➡ https://github.com/OpenBookPrices/country-data
import { countries } from 'country-data'
import shortid from 'shortid'

export const renderCountrySelect = (props) => {
  return (
    <div className='input-group' >
      <label htmlFor='country' >country</label>
      <select {...props.input}>
        {
          countries.all.map((item) => {
            return (<option key={shortid.generate()} value={item.name} >{item.name}</option>)
          })
        }
      </select>
    </div>
  )
}

renderCountrySelect.propTypes = {
  input: PropTypes.object,
}
