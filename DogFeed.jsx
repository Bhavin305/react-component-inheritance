import React from 'react';
import Box from 'grommet/components/Box';
import AnimalFeed from './AnimalFeed';

class DogFeed extends AnimalFeed {

  render() {
    return (
      <Box>
        {super.render()} 
        ...... along with tasty hotDog and milk. 
        <Box>Food items are::-(props from components)
        {this.props.customProps}
        </Box>
      </Box>
    )
  }
}
export default DogFeed;