import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { NavBar } from './NavBar';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: '100%',
    height: 60,
  },
  logo: {},
  text: {
    color: '#ffffff',
  },
});

export const Header = (props) => {
  return <NavBar onChangeRoute={props.onChangeRoute} activeRoute={props.activeRoute} />;
};

Header.propTypes = {
  rendering: PropTypes.object,
  onChangeRoute: PropTypes.func,
  activeRoute: PropTypes.string,
};
