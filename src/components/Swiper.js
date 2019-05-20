import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import { Image, Text } from '@sitecore-jss/sitecore-jss-react-native';
import { DeckSwiper, Card, CardItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import deepEqual from 'fast-deep-equal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
  },
  swiper: {
    width: '100%',
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: 'transparent',
    height: '100%',
  }
});

export class Swiper extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };

    this.handleSwipeLeft = this.handleSwipeLeft.bind(this);
    this.handleSwipeRight = this.handleSwipeRight.bind(this);
  }

  handleSwipeLeft(card) {
    this.setState({ modalVisible: true });    
    this.props.onSwipeLeft(card);
  }

  handleSwipeRight(card) {
    this.setState({ modalVisible: true });    
    this.props.onSwipeRight(card);
  }

  render() {
    const { mvps } = this.props.fields;

    return (
      
        <Row>
          <View style={styles.swiper}>
            <DeckSwiper
              dataSource={mvps}
              renderItem={(card) => {
                return (
                  <Card style={{ elevation: 3 }}>
                    <CardItem style={{ textAlign: 'center' }}>
                      <Text style={styles.cardText} field={card.fields.name} />
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 350, flex: 1, paddingTop: 10 }} media={card.fields.image} />
                    </CardItem>
                  </Card>
                );
              }}
              onSwipeRight={(card) => {
                this.handleSwipeRight(card);
              }}
              onSwipeLeft={(card) => {
                this.handleSwipeLeft(card);
              }}
            />
          </View>
        </Row>
    );
  }
}

Swiper.propTypes = {
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func,
  fields: PropTypes.shape({
    title: PropTypes.object,
    text: PropTypes.object,
    logoImage: PropTypes.object,
    mvps: PropTypes.array,
  }),
};
