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
   
  }
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item, index}) =>{
    console.log(item);
    return(
      <TouchableOpacity style={styles.containerCell}>
        <Image style={styles.image} source={item.image}/>
        <View style={styles.containerText}>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render(){
    return(
      <FlatList
        data={dataDummy.listDummy}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

export default FlatListCell;
