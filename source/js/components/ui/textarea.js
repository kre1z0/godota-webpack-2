import React, { PropTypes } from 'react'
import Textarea from 'react-textarea-autosize'

export const renderTextarea = ({ input, label, type, autoFocus, meta: { touched, error } }) =>
  (<div className='input-group' >
    {touched && ((error && <span className='error' >{error}</span>))}
    <label htmlFor={input.name} >{label}</label>
    <Textarea autoFocus={autoFocus} {...input} type={type} />
  </div>)

renderTextarea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  meta: PropTypes.object,
}
