import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react-native';
import { Container } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { images } from 'static-assets';
import { Header } from './components/Header';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Layout = ({ routeData, onChangeRoute, activeRoute }) => {
  return (
    <Container>
      <ImageBackground
        source={images['/assets/img/iStock_000003405172_Medium.jpg']}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Grid style={{ width: '100%' }}>
          <Row style={{ height: 60 }}>
            <Header />
          </Row>
          <Row>
            <Placeholder
              name="jss-main"
              rendering={routeData}
              onChangeRoute={onChangeRoute}
              activeRoute={activeRoute}
            />
          </Row>
        </Grid>
      </ImageBackground>
    </Container>
  );
};

Layout.propTypes = {
  routeData: PropTypes.object,
  onChangeRoute: PropTypes.func,
  activeRoute: PropTypes.string,
};
