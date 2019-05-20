import React from 'react';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react-native';
import { Root as NbRoot } from 'native-base';
import { RouteHandler } from './RouteHandler';

// import { createStackNavigator } from 'react-navigation';
import componentFactory from './componentFactory';

const App = (props) => {
  return (
    <NbRoot>
    <SitecoreContext componentFactory={componentFactory}>
      <RouteHandler />
    </SitecoreContext>
    </NbRoot>
  );
};

export default App;
