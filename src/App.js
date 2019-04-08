import React, { Component } from 'react';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Header from './Component/header/Header';
import SideNav from './Component/sideNav/SideNav';
import {Provider}  from './Component/context';
import Login from './Component/login/Login';
import Liste from './Component/liste/Liste';
import Profil from './Component/profil/Profil';
import Users from './Component/users/Users'
import './Component/style/Media.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Component/main/Main.css';
import './App.css';
class App extends Component {
  state ={
    sideDrawertoggl:true
  }
  togglDrawer=()=>{
      this.setState((prevState)=>{
       return {sideDrawertoggl:!prevState.sideDrawertoggl};
        });
  }
  render() {
    let sidbar;
    if (this.state.sideDrawertoggl) {
      sidbar=<SideNav />
    }
    return (
      <Provider>
      
      <div className="App">
      <Router>
      <Header clickToggl={this.togglDrawer}/>
      
      {sidbar}
          <Switch>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/Liste" component={Liste}/>
              <Route exact path="/Profil" component={Profil}/>
          </Switch>
      </Router>
     
      </div>
      </Provider>
    );
  }
}
export default App;
