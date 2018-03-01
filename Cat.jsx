import React from 'react';
import ReactDOM from 'react-dom';
import Animal from './Animal';
import Box from 'grommet/components/Box';

class Cat extends Animal {

  constructor(){
    super();
  }

  render() {
    const AnimalCat= super.render();
    return (
      <Box>
        <Box>{ AnimalCat }</Box>
        <button onClick={this.walk}>CatWalk</button>
        <button onClick={this.bark}>CatBark</button>
        <button onClick={this.sleep}>CatSleep</button>
      </Box>
    )
  }
}

export default Cat;