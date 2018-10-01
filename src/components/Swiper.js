import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import { Image, Text } from '@sitecore-jss/sitecore-jss-react-native';
import { DeckSwiper, Card, CardItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

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
    fontSize: 50,
    backgroundColor: 'transparent',
    height: '100%',
  },
  results: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export class Swiper extends React.Component {
  constructor() {
    super();
    this.state = {
      yes: [],
      no: [],
    };

    this.swipeRight = this.swipeRight.bind(this);
    this.swipeLeft = this.swipeLeft.bind(this);
  }

  swipeRight(card) {
    this.setState((prevState) => {
      return { yes: [...prevState.yes, card] };
    });
  }

  swipeLeft(card) {
    this.setState((prevState) => {
      return { no: [...prevState.no, card] };
    });
  }

  render() {
    const { mvps } = this.props.fields;

    return (
      <Grid>
        <Row>
          <View style={styles.swiper}>
            <DeckSwiper
              dataSource={mvps}
              renderItem={(card) => {
                return (
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Text style={styles.cardText} field={card.fields.name} />
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} media={card.fields.image} />
                    </CardItem>
                  </Card>
                );
              }}
              onSwipeRight={(card) => {
                this.swipeRight(card);
              }}
              onSwipeLeft={(card) => {
                this.swipeLeft(card);
              }}
            />
          </View>
        </Row>
        <Row style={{ height: 80 }}>
          <View style={styles.results}>
            <NativeText>Yes: {this.state.yes.length}</NativeText>
            <NativeText>No: {this.state.no.length}</NativeText>
          </View>
        </Row>
      </Grid>
    );
  }
}

Swiper.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.object,
    text: PropTypes.object,
    logoImage: PropTypes.object,
    mvps: PropTypes.array,
  }),
};
