import React, {Component} from 'react';
import {
  FlatList,
  
} from 'react-native';
import { ListItem } from 'react-native-elements'

class FlatListCell extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item, index}) =>{
    const {title,} = item;
    return(
      <ListItem
       title={title}
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
