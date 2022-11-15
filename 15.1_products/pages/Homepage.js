import React from 'react'
import { Route } from 'react-router-dom'

function Homepage() {
  return (
  <section>
  <h1>Home</h1>
  <Route path='/Homepage/new-user'>
    <p>Welcome, new user!</p>
  </Route>
  </section>
  )
}

export default Homepage