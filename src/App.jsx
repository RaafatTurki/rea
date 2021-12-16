import './App.css'
// import Nav from 'lib/Nav'
import Home from 'pages/Home'
// import NotFound from 'pages/NotFound'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
    const routes = [
        {
            path: "/",
            component: <Home/>,
        },
        // {
        //   path: "*",
        //   component: <NotFound/>,
        // }
    ]

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((r, i) => <Route path={r.path} element={r.component} key={i}/>)}
            </Routes>
        </BrowserRouter>
    )
}
export default App
