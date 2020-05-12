import React from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './Header.scss';

const Header = props => (
  
      <header className="toolbar">
          <nav className="toolbar-navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/home"></a></div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
              <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/Characters">Characters</NavLink></li>
                <li><NavLink to="/Comics">Comics</NavLink></li>
              </ul>
            </div>
          </nav>
      </header>
);

export default Header;
