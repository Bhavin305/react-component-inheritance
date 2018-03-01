import React from 'react';
import Box from 'grommet/components/Box';

class AnimalGreet extends React.Component {

  render() {
    return (
      <Box>
        Hey, {this.props.name}... How are you doing?!!
      </Box>
    )
  }
}

export default AnimalGreet;
