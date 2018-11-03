import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';


class NewsDetails extends Component {
  static navigationOptions = {
    title: 'News Detail'
  }
  constructor(props){
    super(props);
  }

  render() {
    const {title, link, image}=this.props.navigation.state.params;
    return(
      <ScrollView>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{fontSize: 24, fontWeight:'bold', }}>{title}</Text>
        </View>
        <Image style={{height:200,width:'100%', marginBottom:20}} source={{uri:image}}/>
        <Text>You can see more at: {link}</Text>
      </ScrollView>
    )
  }
}

export default NewsDetails;