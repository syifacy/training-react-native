import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
} from 'react-native';

import {counterIncrement, counterDecrement} from '../../actions';

import MyCount from '../Count/CountComponent';
import MyButton from '../Button/ButtonComponent';
import MyTextInput from '../TextInput/TextInputComponent'
import styles from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('=>App:Constructor');
    this.state = {
      initial: "",
      count: 0
    };
  }

  onChangeText = (text) => {
    this.setState({
      initial: text,
      count: text ? parseInt(text, 10) : 0,
    });
  }

  render() {
    const { count, initial } = this.state;
    const {counterIncrement, counterDecrement, counter} = this.props;

    // console.log('=>App:Render');
    // console.log('state.count: ', count);

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png' }}
        />
        <MyTextInput
          value={counter.toString()}
          placeholder="Input your value"
          onChangeText={this.onChangeText}
        />
        <MyCount value={counter} />
        <View style={styles.buttonContainer}>
          <MyButton
            style={{ flexGrow: 2 }}
            onPress={counterIncrement}
            title="Tambah"
          />
          <MyButton
            style={{ flexGrow: 1 }}
            onPress={counterDecrement}
            title="Kurang"
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
   counter: state.counter 
});

const mapDispatchToProps = {
  counterIncrement,
  counterDecrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

