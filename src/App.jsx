import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TeacherPage from './pages/TeacherPage'
import ClassroomPage from './pages/ClassroomPage'
import StudentPage from './pages/StudentPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Lennard High School</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Teacher</Link>
            </li>
            <li>
              <Link to="/1">Classroom</Link>
            </li>
            <li>
              <Link to="/2">Student</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={TeacherPage}></Route>
        <Route exact path="/1" component={ClassroomPage}></Route>
        <Route exact path="/2" component={StudentPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
