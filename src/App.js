import './App.css';
import Login from './components/Login';
import SideBar from './components/SideBar';
import AdminRegister from './components/notRequire/AdminRegister';
import LoginAdmin from './components/notRequire/LoginAdmin';
import {useSelector, useDispatch } from 'react-redux';
import React,{useState, useEffect} from 'react';
import { getDonor } from './actions/donor';
import { hot } from 'react-hot-loader/root';


import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  // const state=useSelector((state)=>state.donor);
  // console.log(state);

  const [CurrentId, setCurrentId] = useState(0);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getDonor());
  },[CurrentId,dispatch])


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

// export default App;
export default hot(App);