import React from 'react';
import ReactDOM from 'react-dom';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import AnimalFeed from './AnimalFeed';
import AnimalGreet from './AnimalGreet';

class Animal extends React.Component {

  constructor(animalFeed, animalGreet) {
    super();
    this.animalFeed = { comp: animalFeed && animalFeed.comp || AnimalFeed, props: animalFeed && animalFeed.props || this.props };
    this.animalGreet = animalGreet || AnimalGreet;
  }

  walk = () => {
    alert(this.props.name + ' is walking');
  }

  bark = () => {
    alert(this.props.name + ' is barking');
  }

  sleep = () => {
    alert(this.props.name + ' is sleeping');
  }

  render() {
    const Feed = this.animalFeed.comp;
    const Greet = this.animalGreet;
    return (
      <Box>
        <Box><h1> {this.props.name} </h1></Box>
        <Box>
          <Button onClick={this.walk} label="Walk"></Button>
          <Button onClick={this.bark} label="Bark"></Button>
          <Button onClick={this.sleep} label="Sleep"></Button>
        </Box>
        <Feed customProps={this.animalFeed.props} />
        <Greet />
      </Box>
    )
  }
}

export default Animal;