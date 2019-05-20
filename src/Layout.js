import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, TouchableHighlight, View, Text as NativeText } from 'react-native';
import Modal from 'react-native-modal';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react-native';
import { Container, Button } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Sound from 'react-native-sound';
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

export class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      yes: [],
      no: [],
      modalVisible: false,
      partyMode: false,
    };

    this.swipeRight = this.swipeRight.bind(this);
    this.swipeLeft = this.swipeLeft.bind(this);
    this.handlePartyModeClick = this.handlePartyModeClick.bind(this);
    this.togglePartyMode = this.togglePartyMode.bind(this);
    this.sound = null;
  }

  handlePartyModeClick() {
    this.setState({ modalVisible: false });
    this.togglePartyMode();
  }

  togglePartyMode() {
    this.setState((prevState) => {
      console.log('toggling');
      if (this.sound) {
        this.sound.stop();
      }
      const sound = new Sound('swipeclean.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          // do something
          console.error(error);
        }
        console.log('play sound');
        // play when loaded
        sound.play();
      });

      this.sound = sound;
      return { partyMode: !prevState.partyMode };
    });

  }

  swipeRight(card) {
    this.setState((prevState) => {
      return { yes: [...prevState.yes, card], modalVisible: prevState.yes.length + prevState.no.length > 5 && !prevState.partyMode };
    });
  }

  swipeLeft(card) {
    this.setState((prevState) => {
      return { no: [...prevState.no, card], modalVisible: prevState.yes.length + prevState.no.length > 5 && !prevState.partyMode };
    });
  }

  render() {
    const { routeData, onChangeRoute, activeRoute } = this.props;

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
            
            <Placeholder
              name="jss-main"
              rendering={routeData}
              onChangeRoute={onChangeRoute}
              activeRoute={activeRoute}
              onSwipeLeft={this.swipeLeft}
              onSwipeRight={this.swipeRight}
              votes={{ yes: this.state.yes, no: this.state.no }}
            />
            <Modal
              isVisible={this.state.modalVisible}
              backdropColor="white"
              backdropOpacity={0.80}
              onSwipe={() => this.setState({ modalVisible: false })}
  swipeDirection="left"
  onBackdropPress={() => this.setState({ modalVisible: false })}
              >
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <NativeText style={{ fontSize: 30 }}>You poor marketer, you must be tired after all that swiping? Perhaps enabling Party Mode will help?</NativeText>

                <Button
                  primary
                  onPress={this.handlePartyModeClick}
                  style={{ width: '100%' }}>
                  <NativeText style={{ color: '#fff', fontSize: 30, textAlign: 'center'}}>YES</NativeText>
                </Button>
              </View>
            </Modal>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}

Layout.propTypes = {
  routeData: PropTypes.object,
  onChangeRoute: PropTypes.func,
  activeRoute: PropTypes.string,
};
