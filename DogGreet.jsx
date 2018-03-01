import React from 'react';
import Box from 'grommet/components/Box';

class DogGreet extends React.Component {

  render() {
    return (
      <Box>
        Hey, {this.props.name}... How are you doing?!! Greetig to a rowdy Dog!!
      </Box>
    )
  }
}

export default DogGreet;
