import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { images } from 'static-assets';
import Iconz from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  text: {
    color: '#000',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileButton = ({ active, onPress }) => {
  return active ? (
    <View style={{ width: 25, height: 25, margin: 10 }} />
  ) : (
    <TouchableOpacity onPress={() => onPress('/profile')}>
      <Iconz name="ios-person" color="#888" size={25} style={{ margin: 10 }} />
    </TouchableOpacity>
  );
};

const MessageButton = ({ active, onPress }) => {
  return active ? (
    <View style={{ width: 25, height: 25, margin: 10 }} />
  ) : (
    <TouchableOpacity onPress={() => onPress('/message')}>
      <Iconz name="ios-chatboxes" color="#555" size={25} style={{ margin: 10 }} />
    </TouchableOpacity>
  );
};

const LogoButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress('/')} style={styles.logoContainer}>
      <Image
        source={images['/assets/img/sitecore-mvp-logo-small.png']}
        resizeMode="contain"
        style={{ width: 100, height: 30 }}
      />
      <Text style={styles.text}>...or not</Text>
    </TouchableOpacity>
  );
};

export const NavBar = (props) => {
  return (
    <View style={styles.container}>
      <ProfileButton onPress={props.onChangeRoute} active={props.activeRoute === '/profile'} />
      <LogoButton onPress={props.onChangeRoute} />
      <MessageButton onPress={props.onChangeRoute} active={props.activeRoute === '/message'} />
    </View>
  );
};

NavBar.propTypes = {
  onChangeRoute: PropTypes.func,
  activeRoute: PropTypes.string,
};
