import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './CountComponent.styles';

export default class CountComponent extends Component {

  render() {
    console.log('=>=>CountComponent:Render');
    console.log('props', this.props);
    const { value } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {value}
        </Text>
      </View>
    );
  }
}
