import React from 'react';
import { View, Text, RefreshControl, StyleSheet, ScrollView } from 'react-native';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { getRouteData } from 'data-service';
import deepEqual from 'fast-deep-equal';
import { Layout } from './Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
});

export class RouteHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeData: null,
      error: null,
      loading: true,
      activeRoute: '',
    };
    this.loadData = this.loadData.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
    this.interval = null;
  }

  loadData(routePath) {
    if (this.interval) {
      clearInterval(this.interval);
    }
    getRouteData(routePath)
      .then((data) => {
        this.setState({ routeData: data, loading: false, activeRoute: routePath });
        return data;
      })
      .then((routeData) => {
        if (process.env.CONNECTED) {}
        this.interval = setInterval(() => {
          getRouteData(routePath)
          .then((data) => {
            if (!deepEqual(data, this.state.routeData)) {
              this.setState({ routeData: data });
            }
          })
          .catch((err) => {
            console.error(err);
          });
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: err, loading: false });
      });
  }

  componentDidMount() {
    this.loadData('/');
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeRoute(routePath) {
    this.loadData(routePath);
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>loading...</Text>
        </View>
      );
    }
    if (this.state.error) {
      return (
        <View>
          <Text>{this.state.error}</Text>
        </View>
      );
    }

    const refreshControl = (
      <RefreshControl
        refreshing={this.state.loading}
        onRefresh={() => this.loadData(this.state.activeRoute)}
      />
    );
    return (
      <Layout
        {...this.props}
        routeData={this.state.routeData}
        onChangeRoute={this.changeRoute}
        activeRoute={this.state.activeRoute}
      />
    );
  }
}
