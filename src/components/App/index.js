// == Import : npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';

// Import components
import Header from '../Header/Header';
import SideDrawer from '../Header/SideDrawer/SideDrawer';
import Backdrop from '../Header/Backdrop/Backdrop';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';
import Comics from '../Comics/Comics';
import Characters from '../Characters/Characters';
import SingleCharacter from '../Characters/SingleCharacter';
import ErrorPage from '../ErrorPage/ErrorPage';

// == Composant
class App extends React.Component {

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router style={{height: '100%'}}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} /> 
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Switch>
          <Route path="/home" exact component={Welcome} />
          <Route path="/Comics" component={Comics} />
          <Route path="/Characters" component={Characters} />
          
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

// == Export
export default App;
