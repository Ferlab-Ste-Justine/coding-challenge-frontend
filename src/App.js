import React from 'react';

import BarreDeRecherche from './component/BarreDeRecherche';
import Images from './component/images';


class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <BarreDeRecherche/>
        <Images/>
      </React.Fragment>

    )
  }
}

export default App;
