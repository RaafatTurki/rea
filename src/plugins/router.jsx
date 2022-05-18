// defines a single route
class Route {
  constructor(path, component, meta = {}) {
    this.path = path
    this.component = component
    this.meta = meta
  }
}

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

// defines all routes
const routes = [
  new Route('/',      <Home/>,          { name: 'Home',     is_nav: true }),
  new Route('*',      <NotFound/>,      { name: '404'}),
]

// holds all routes in a digestable format for the SPA router
const routes_spa = routes.map(r => { return { path: r.path, element: r.component }})

export {
  routes,
  routes_spa,
}
