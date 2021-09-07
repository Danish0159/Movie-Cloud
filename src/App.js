import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../src/pages/Home'
import Movie from '../src/pages/SingleMovie'



function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      {/* <Route path='/movies/:id' children={<Movie />} /> ps*/}
    </Switch>
  )
}

export default App
