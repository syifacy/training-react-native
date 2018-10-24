import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import FlatListCell from '../../components/FlatList/FlatListCell';
import styles from './BoardList.style';
import {loadList, loadingNow} from '../../actions/ListBoardAction';

class BoardList extends Component {
  constructor(props){
    super (props);
  }
  
  _onPress = () =>{
    this.props.loadingNow();
    setTimeout(()=>{
      console.log("Timeout")
        this.props.loadList();
    }, 1000)
  }
  
  render(){
    const {loadSuccess, isLoading} = this.props;
      return(
        <View>
          <TouchableOpacity
            style={styles.buttonBoard}
            onPress={this._onPress}
          >
           <Text> GET DATA</Text>
          </TouchableOpacity>
        {
          isLoading ?
          <View style={[styles.containerLoading, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
          loadSuccess?
          <View>
            <FlatListCell />
          </View>
          :
          <View><Text></Text></View>
        }
        </View>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log("state",state)
  return{
    isLoading: state.listBoardReducer.isLoading,
    loadSuccess: state.listBoardReducer.loadSuccess
  }
}

const mapDispatchToProps = {
  loadList,
  loadingNow
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);