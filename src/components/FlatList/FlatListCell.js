import React, {Component} from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
} from 'react-native';
import styles from '../../screen/List/BoardList.style'

class FlatListCell extends Component{
  constructor(props){
    super(props);
    this.state ={
      listDummy: [
        {
          id:1,
          title: "ABC lima dasar",
          desc: "Permainan jaman bahela",
          image:require("../../images/abclimadasar.png")
        },
        {
          id: 2,
          title: "Hompimpa alaium gambreng",
          desc:"Ketika membutuhkan decision siapa yang jaga",
          image: require("../../images/hompimpa.png")
        },
        {
          id: 3,
          title: "Suit",
          desc:"Ketika menentukan siapa yang duluan jalan",
          image: require("../../images/suit.png")
        }
      ]
    }
  }
  _keyExtractor = (item, index) => index;
  _renderItem = ({item, index}) =>{
    console.log(item);
    return(
      <View style={styles.containerCell}>
        <Image style={styles.image} source={item.image}/>
        <View style={styles.containerText}>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
        </View>
      </View>
    )
  }
  render(){
    return(
      <FlatList
        data={this.state.listDummy}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

export default FlatListCell;
