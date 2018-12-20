import React from 'react';
import { addBid } from '../../services/bidingService'
import Input from '../Input/Input'
import Form from '../Form/Form'
import Joi from 'joi-browser'
import { getProjectDetails } from '../../utils/utils'
import { getCurrentUser } from '../../utils/utils'
import { getQuote } from '../../utils/utils'
import './PlaceBid.scss';

export default class PlaceBid extends Form {
  state = {
    data: {
      price: ''
    },
    project: {},
    errors: {
    },
    posted: false
  }

  schema = {
    price: Joi.number().required().label('Price')
  }

  doSubmit = async () => {
    const user = getCurrentUser();
    const status = await addBid(this.state.data.price, user.id, this.state.project.ProjectId);
    this.setState({ posted: true });
  }

  loginUser = () => {
    window.location = '/register';
  }
  componentDidMount() {
    const data = getProjectDetails(this.props.match.params.id)
    this.setState({ project: data });
  }
  render() {
    if (this.state.posted) {
      return (<p className="projectForm_message"> Your Bid successfully placed!!!!</p>);
    }
    return (
      <div className='card placeBid page' key={this.state.project.ProjectId}>
        {(!this.props.user) && (<button className="btn btn-primary project-bid" onClick={this.loginUser}>Login/Sign Up to post a project</button>)}
        {(this.props.user) &&
          (<form className="form-signin" onSubmit={this.handleSubmit}>
            <div className='card-header'>Place a Bid</div>
            <div className='card-body'>
              <div className='card-text'>Project : {this.state.project.ProjectTitle}</div>
              <div className='card-text'>Price Type : {this.state.project.ProjectBidType}</div>
              <div className='card-text'>Current Bid : {getQuote(this.state.project.ProjectId)}</div>
              <Input label="Bid a price" name='price' value={this.state.data.price} type="text" onChange={this.handleChange} focus="true" error={this.state.errors.price}></Input>
              <button disabled={this.validate()} className="btn btn-primary">Place a Bid</button>
            </div>
          </form>)}
      </div>
    )
  }
}