import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { renderInput } from '../components/ui/input'
import { renderCountrySelect } from '../components/ui/select'

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  handlerSubmit(values) {
    console.log('values', values)
  }

  render() {
    return (
      <div className='container' >
        <h1>Form</h1>
        <form onSubmit={this.props.handleSubmit(this.handlerSubmit)} >
          <Field name='id' type='text'
            label='id'
            component={renderInput}
          />
          <Field name='nickname' type='text'
            label='name'
            component={renderInput}
          />
          <Field name='country' component={renderCountrySelect} />
          <input className='button right-block' type='submit' value='сохранить' />
        </form>

      </div>
    )
  }
}

export default connect(
  state => ({
    name: state.News.name,
    initialValues: state.News.initialValues,
  }),
  {},
)(reduxForm({
  form: 'formData',
})(Form))
