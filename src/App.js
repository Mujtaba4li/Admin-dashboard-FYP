import './App.css';
import Login from './components/Login';
import SideBar from './components/SideBar';

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

        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
