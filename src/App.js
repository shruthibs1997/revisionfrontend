
import './App.css';
import styled from 'styled-components';
import {Link,Route,Switch} from "react-router-dom"
import Adminpage from './components/Adminpage';
import Addstudent from './components/Addstudent';
import Addcontest from './components/Addcontest';
import Studentpage from './components/Studentpage';

function App() {
  return (
    <div className="App">
      <NavStyled>
        <Link to="/">Home</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/student/dashboard">Student Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </NavStyled>
      <Switch>
      <Route exact path="/">
        welcome to home page of the masai school
      </Route>
      <Route path="/admin/dashboard">
        <Adminpage/>
      </Route>
      <Route path="/student/dashboard">
        <Studentpage/>
      </Route>
      <Route path="/login">
        login
      </Route>
      <Route path="/signup">
        signup
      </Route>
      <Route path="/admin/addstudent">
        <Addstudent/>
      </Route>
      <Route path='/admin/addcontest'>
        <Addcontest/>
      </Route>
    </Switch>
    </div>
  );
}

const NavStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default App;
