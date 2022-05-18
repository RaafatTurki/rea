import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { routes_spa, routes } from './plugins/router'

import './global.css'

export default class App extends React.Component {
  render() {
    return <>
      {routes.map((r, i) => <p key={i}>{r.path} goes to {r.meta.name}</p>)}

      <BrowserRouter>
        <Routes>
          {routes_spa.map((r, i) => <Route path={r.path} element={r.element} key={i}/>)}
        </Routes>
      </BrowserRouter>
    </>
  }
}
