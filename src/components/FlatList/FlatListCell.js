import React, {Component} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import styles from '../../screen/List/BoardList.style';
import {dataDummy} from './Constants.FlatListCell';

class FlatListCell extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item, index}) =>{
    const {title, link, thumbnail} = item;
    return(
      <TouchableOpacity 
        style={styles.containerCell}
        onPress={()=> this.props.navigation.navigate('NewsDetail',{
          title,
          link,
          image:thumbnail[0]
        })}
        >
        <Image style={styles.image} source={{uri:item.thumbnail[0]}}/>
        <View style={styles.containerText}>
          <Text>{item.title}</Text>
          <Text>{item.link}</Text>
        </View>
      </TouchableOpacity>
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
