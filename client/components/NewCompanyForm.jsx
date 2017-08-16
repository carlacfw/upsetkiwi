import React from 'react'
import {connect} from 'react-redux'
import {addCompanyRequest} from '../actions/companies'

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newCompany: {
        name: '',
        email: '',
        website: ''
      }
    }
  }

  submitDetails(e){
    let {newCompany} = this.state
    e.preventDefault()
    this.props.dispatch(addCompanyRequest(newCompany,()=>{
      this.props.history.push('/')
    }))
  }
  handleChange(e) {
    let {newCompany} = this.state
    newCompany[e.target.name] = e.target.value
    this.setState({
      newCompany
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitDetails.bind(this)}>
          <input name='name' placeholder="Company Name" onChange={this.handleChange.bind(this)} value={this.state.newCompany.name}/>
          <input name='email' placeholder="Company Email" onChange={this.handleChange.bind(this)} value={this.state.newCompany.email}/>
          <input name='website' placeholder="Company Website" onChange={this.handleChange.bind(this)} value={this.state.newCompany.website}/>

          <input type='submit' value='save'/>
        </form>
      </div>
    )
  }
}

export default connect()(Form)
