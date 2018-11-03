import React, {Component} from 'react';
import {
  FlatList,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import WebViewComponent from '../WebView/WebViewComponent';

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
          title={item.title}
          subtitle={item.description}
          leftAvatar={{ rounded: true, source: item.urlToImage && { uri: item.urlToImage } }}
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
