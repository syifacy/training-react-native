import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import FlatListCell from '../../components/FlatList/FlatListCell';
import styles from './BoardList.style';
import {loadList, loadingNow} from '../../actions/ListBoardAction';
import {fetchNews} from '../../actions/NewsAction';

class BoardList extends Component {
  constructor(props){
    super (props);
  }
  
  _onPress = () =>{
    this.props.fetchNews();
  }
  _onChange = (value) =>{
    console.log("change", value)
  }
  
  render(){
    const {news, isLoading} = this.props;
      return(
        <ScrollView>
          <TextInput
              onChangeText={this._onChange}
              placeholder='Search query'
              style={styles.textStyle}
          />
          <TouchableOpacity
            style={styles.buttonBoard}
            onPress={this._onPress}
          >
           <Text style={{color:'#FFFFFF'}}>GET Query</Text>
          </TouchableOpacity>
        {
          isLoading ?
          <View style={[styles.containerLoading, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
          <View style={styles.containerFlatList}>
            <FlatListCell
              listNews = {news}
             />
          </View>
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log("state",state)
  return{
    // isLoading: state.listBoardReducer.isLoading,
    // loadSuccess: state.listBoardReducer.loadSuccess
    news: state.listNews.news,
    isLoading: state.listNews.loading,
    message: state.listNews.message
  }
}

const mapDispatchToProps = {
  fetchNews
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);