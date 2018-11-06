import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  FlatList,
  View
  
} from 'react-native';
import { Button, Divider, ListItem } from 'react-native-elements';

class FlatListCell extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item, index}) =>{
    console.log("item #", item)
    return(
        <ListItem
          key={index}
          title={item.name}
          leftIcon={{ name: 'insert-link' }}
          onPress={()=> this.props.navigation.push('NewsDetail',{
            title: item.name,
        })}
        />
     
    )
  }
  render(){
    return(
      <FlatList
        data={this.props.listNews}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

export default FlatListCell;
