import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import  {Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, createUserProfile} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';



class App extends React.Component {

  firebaseSubscription = null;

  componentWillUnmount() {
    this.firebaseSubscription();
    
  }

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.firebaseSubscription = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
          // this.setState({
          //   currentUser: {
              
          //   }
          // }, () => {
          //   console.log(this.state);
          // })
        });
      } else {
        setCurrentUser(null);
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
       
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
