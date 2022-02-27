import './App.css';
import Login from './components/Login';
import SideBar from './components/SideBar';
import AdminRegister from './components/notRequire/AdminRegister';
import LoginAdmin from './components/notRequire/LoginAdmin';

import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={SideBar} />
          <Route path="/adminregister123" exact component={AdminRegister}/>
          <Route path="/login123" exact component={LoginAdmin}/>

        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
