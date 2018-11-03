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
  static navigationOptions = {
    title: 'News'
  }
  constructor(props){
    super (props);
    this.state ={
      isDisabled: true,
      valueSearch:''
    }
  }
  
  _onPress = () =>{
    this.props.fetchNews(this.state.valueSearch);
  }
  _onChange = (value) =>{
    console.log("change", value)
    if (value.length !== 0){
      this.setState({isDisabled: false, valueSearch:value})
    }
  }
  
   render(){
    const {news, isLoading, navigation} = this.props;
    const { isDisabled } =this.state;
      return(
        <ScrollView>
        <View style={styles.containerHeader}>
          <TextInput
              onChangeText={this._onChange}
              placeholder='Search query'

          />
          <TouchableOpacity
            style={styles.buttonBoard}
            disabled={isDisabled}
            onPress={this._onPress}
          >
           <Text style={{color:'#FFFFFF'}}>GET Query</Text>
          </TouchableOpacity>
        </View>
        {
          isLoading ?
          <View style={[styles.containerLoading, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
          <View style={styles.containerFlatList}>
            <FlatListCell
              listNews = {news}
              navigation = {navigation}
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