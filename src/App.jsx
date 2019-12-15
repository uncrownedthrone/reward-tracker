import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TeacherPage from './pages/TeacherPage'
import TeacherAdminPage from './pages/TeacherAdminPage'
import ClassroomPage from './pages/ClassroomPage'
import StudentPage from './pages/StudentPage'
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
              <Link to="/1">Teacher</Link>
            </li>
            <li className="appLi">
              <Link to="/2">Teacher Admin</Link>
            </li>
            <li className="appLi">
              <Link to="/3">Classroom</Link>
            </li>
            <li className="appLi">
              <Link to="/4">Student</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={TeacherPage}></Route>
        <Route exact path="/2" component={TeacherAdminPage}></Route>
        <Route exact path="/3" component={ClassroomPage}></Route>
        <Route exact path="/4" component={StudentPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
