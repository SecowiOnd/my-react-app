import React, { Profiler } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { getAuthUserData } from './Redux/auth-reducer';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
//import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import {connect, Provider} from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './Components/Common/Preloader/Preloader';
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp()
}

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content" >
          <Route path="/dialogs"
                 render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}  />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users"
            render={() => <UsersContainer />} />
          <Route path="/login"
            render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  initialized:state.app.initialized
})

let AppContainer = compose(
   withRouter,
   connect(mapStateToProps, {initializeApp })) (App);

 const SocialApp =(props) => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SocialApp;