import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TeacherAdminPage from './pages/TeacherAdminPage'
import ClassroomPage from './pages/ClassroomPage'
import StudentPage from './pages/StudentPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>American High School</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/1">Teacher Admin</Link>
            </li>
            <li>
              <Link to="/2">Classroom</Link>
            </li>
            <li>
              <Link to="/3">Student</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={TeacherAdminPage}></Route>
        <Route exact path="/2" component={ClassroomPage}></Route>
        <Route exact path="/3" component={StudentPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
