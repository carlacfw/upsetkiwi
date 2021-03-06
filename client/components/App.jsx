import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import NewCompanyForm from './NewCompanyForm'
import ComplaintForm from './ComplaintForm'
import AutoCompleteCompanyForm from './AutoCompleteCompanyForm'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Upset Kiwi</h1>
      <Route exact path="/" component={Home} />
      <Route exact path='/autocompleteform' component={AutoCompleteCompanyForm}/>
      <Route exact path='/companies/new' component={NewCompanyForm}/>
      <Route path='/complaints/new' component={ComplaintForm}/>
    </div>
  </Router>
)

export default App
