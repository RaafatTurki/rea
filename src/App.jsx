import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

import './App.css'

export default class App extends React.Component {
  routes = [
    {
      path: "/",
      component: <Home/>,
    },
    {
      path: "*",
      component: <NotFound/>,
    }
  ]

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {this.routes.map((r, i) => <Route path={r.path} element={r.component} key={i}/>)}
        </Routes>
      </BrowserRouter>
    )
  }
}
