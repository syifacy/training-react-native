import React, {Component} from 'react';
import { WebView } from 'react-native';

class WebViewComponent extends Component{
  static navigationOptions = ({ navigation }) => {
    
    return {
      title:navigation.state.params.title,
    };
  };
render(){
  return(
    <WebView 
        source={{uri: this.props.navigation.state.params.url}}
        style={{marginTop: 20}}
    />
  )
}
}

export default WebViewComponent;