import React, { Component } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import MenuButton from '../Navigation/MenuButton/MenuButton';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }; 

      });
    }

   render() {
  return (
    <>
      
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
      <MenuButton open={this.state.showSideDrawer}closed={this.sideDrawerClosedHandler}/>
      
      <main className='Content'>
        {this.props.children}
      </main>
    </>
  )
}
}

export default Layout;
