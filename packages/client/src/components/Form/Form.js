import { Component } from 'react';
import Joi from 'joi-browser'

export default class Form extends Component {

  state = {
    data: {},
    errors: {}
  }

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, { abortEarly: false })
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details)
      errors[item.path[0]] = item.message;
    return errors;
  }

  validateElement = ({ name, value }) => {
    const data = { [name]: value };
    const schema = { [name]: this.schema[name] }
    const result = Joi.validate(data, schema)
    if (!result.error) {
      return null;
    } else {
      return result.error.details[0].message;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate()
    this.setState({ errors: errors || '' })
    if (errors) return;
    this.doSubmit();
  }

  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateElement(e.currentTarget)
    if (errorMessage) {
      errors[e.currentTarget.name] = errorMessage;
    } else {
      delete errors[e.currentTarget.name];
    }
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data })
    this.setState({ errors: errors || '' })
  }
}