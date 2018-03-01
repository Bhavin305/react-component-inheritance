import React from 'react';
import ReactDOM from 'react-dom';
import Grommet from 'grommet/components/Grommet';
import 'grommet/grommet.min.css';
import Box from 'grommet/components/Box';
import Cat from './Cat';
import Dog from './Dog';

const App = (props) => (
  <Grommet>
    <Box direction="row" justify="between">
      <Cat name="Cat" />
      <Dog name="Dog" />
    </Box>
  </Grommet>
);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));