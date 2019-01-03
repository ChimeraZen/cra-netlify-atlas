import React, { Component } from 'react'
import './App.css'

import ProductTable from './components/ProductTable'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Create-react-app, Netlify & MongoDB Atlas Demo</h1>
        <p>See the full guide <a href='https://medium.com/@chimera.zen/how-to-make-a-crud-with-netlify-create-react-app-atlas-mongodb'>How to make a CRUD with Netlify, create-react-app & MongoDB Atlas</a> for more information.<br />
GitHub repository: <a href='https://github.com/ChimeraZen/cra-netlify-atlas'>https://github.com/ChimeraZen/cra-netlify-atlas</a></p>
        <ProductTable />
      </div>
    )
  }
}
