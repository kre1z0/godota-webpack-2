import React, { PropTypes } from 'react';

export const renderInput = ({ input, classNames, label, type, placeholder, autoFocus, meta: { touched, error } }) =>
    (<div className="input-group" >
        {touched && ((error && <span className="error" >{error}</span>))}
        <label htmlFor={input.name} >{label}</label>
        <input placeholder={placeholder} className={classNames} autoFocus={autoFocus} {...input} type={type} />
    </div>);

renderInput.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    meta: PropTypes.object,
    classNames: PropTypes.string,
};
