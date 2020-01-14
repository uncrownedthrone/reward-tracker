import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TeacherPage from './pages/TeacherPage'
import ClassroomPage from './pages/ClassroomPage'
import StudentPage from './pages/StudentPage'
import NewClassroomPage from './pages/NewClassroomPage'
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
              <Link to="/teacher">Teacher</Link>
            </li>
            <li className="appLi">
              <Link to="/classrooms">Classrooms</Link>
            </li>
            <li className="appLi">
              <Link to="/student">Student</Link>
            </li>
            <li className="appLi">
              <Link to="/newclassroom">New Classroom</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/teacher" component={TeacherPage}></Route>
        <Route exact path="/classrooms" component={ClassroomPage}></Route>
        <Route exact path="/student" component={StudentPage}></Route>
        <Route exact path="/newclassroom" component={NewClassroomPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
