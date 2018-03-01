import React from 'react';
import ReactDOM from 'react-dom';
import Animal from './Animal';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DogFeed from './DogFeed';
import DogGreet from './DogGreet';
class Dog extends Animal {

  constructor() {
    super({ comp: DogFeed, props: ['Milk', 'Biscuit', 'Muffin'] }, DogGreet); // Define props or use this.props
  }

  run = () => {
    alert(this.props.name + ' is running fast!!!');
  }

  bark = () => {
    alert(this.props.name + ' is barking Woooow.');
  }

  sleep = () => {
    alert(this.props.name + ' is sleeping.');
  }

  render() {
    const AnimalDog = super.render();
    return (
      <Box direction="row">
        {AnimalDog}
        <Button onClick={this.run} label="Run"></Button>
      </Box>
    )
  }
}

export default Dog;