import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Text } from '@sitecore-jss/sitecore-jss-react-native';
import { Card, CardItem, Body, Text as NbText } from 'native-base';

const styles = StyleSheet.create({
  results: {
    width: '100%',
    backgroundColor: 'white',
    height: 80,
    flex: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 30,
  }
});

export class Results extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { votes } = this.props;
    // const messageField = this.props.fields && this.props.fields.message;
    const messageField = {value: 'blah blah'};

    return (      
      <Row style={styles.results}>
        <Grid>
          {/* <Row>
            <Col><Text field={messageField} style={styles.text} /></Col>
          </Row> */}
          <Row>
            <Col><View style={{ flex: 1 }}><NativeText style={styles.text}>MVP: {votes.yes.length}</NativeText></View></Col> 
            <Col><View style={{ flex: 1 }}><NativeText style={styles.text}>Not MVP: {votes.no.length}</NativeText></View></Col>
          </Row>
        
        </Grid>
      </Row>
    );
  }
}

Results.propTypes = {
  votes: PropTypes.object,
  fields: PropTypes.object,
};
