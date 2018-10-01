import React from 'react';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react-native';
import { RouteHandler } from './RouteHandler';

// import { createStackNavigator } from 'react-navigation';
import componentFactory from './componentFactory';

const App = (props) => {
  return (
    <SitecoreContext componentFactory={componentFactory}>
      <RouteHandler />
    </SitecoreContext>
  );
};

export default App;
