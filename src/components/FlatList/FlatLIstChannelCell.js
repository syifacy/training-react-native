import React, {Component} from 'react';
import {
  FlatList,
  
} from 'react-native';
import { ListItem } from 'react-native-elements';

class FlatListCell extends Component{
  _keyExtractor = (index) => index.toString();
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
