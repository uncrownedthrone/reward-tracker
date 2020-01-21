import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PeriodPage from './pages/PeriodPage'
import StudentPage from './pages/StudentPage'
import AddStudent from './pages/AddStudent'
import NewPeriodPage from './pages/NewPeriodPage'
import AllPeriodsPage from './pages/AllPeriodsPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/08/Hogwarts-Logo.png"
          alt="hogwarts logo"
        />
        <h1>Hogwarts School of Witchcraft and Wizardry</h1>
        <nav className="appNav">
          <ul className="appUl">
            <li className="appLi">
              <Link to="/">Home</Link>
            </li>
            <li className="appLi">
              <Link to="/allperiods">All Periods</Link>
            </li>
            <li className="appLi">
              <Link to="/student">One Student</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/allperiods" component={AllPeriodsPage}></Route>
        <Route exact path="/period/new" component={NewPeriodPage}></Route>
        <Route exact path="/period/:id" component={PeriodPage}></Route>
        <Route exact path="/student/:id" component={StudentPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      <footer>Made on Platform ❾¾</footer>
    </Router>
  )
}

export default App
