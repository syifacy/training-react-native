import React, {Component} from 'react';
import {
  FlatList,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import styles from '../../screen/List/NewsFeedBoard.style';

class FlatListCell extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item, index}) =>{
    return(
        <ListItem
          key={index}
          avatar={{
            uri: item.urlToImage,
          }}
          title={item.title}
          subtitle={item.description}
          onPress={()=>
           this.props.navigation.navigate('WebviewComponent',
           {url:item.url,
           title:item.title})
          }
          
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
