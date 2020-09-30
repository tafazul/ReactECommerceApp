import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import  {Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {addCollectionAndDocuments, auth, createUserProfile} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import CheckOut from './components/check-out/check-out.component';
import { selectShopCollectionForPreview } from './redux/shop/shop.selectors';
import NormalComponent from './hocs/normal';



class App extends React.Component {

  firebaseSubscription = null;

  componentWillUnmount() {
    this.firebaseSubscription();
    
  }

  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props;
    this.firebaseSubscription = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        if(!userAuth.displayName) {
          return;
        }
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
      
    })
    // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}) ));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) } />
          <Route exact path='/hoc' component={NormalComponent} />
        </Switch>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser,
  collectionsArray: selectShopCollectionForPreview(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
