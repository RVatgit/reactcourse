import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/Menu'
import {dishes} from './data/data';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:dishes
    }

  }
  render() {
    return (<div>
      <Navbar dark color='danger'>
        <div className='container-fluid'>
          <NavbarBrand href='/'> Some React App </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>)
  }
};

export default App;
