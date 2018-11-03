import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  ActivityIndicator,
 
} from 'react-native';
import FlatListCell from '../../components/FlatList/FlatListCell';
import styles from './NewsFeedBoard.style';
import {fetchChannelNews} from '../../actions/NewsAction';

class NewsFeedBoard extends Component {
  static navigationOptions = {
    title: 'News Feed'
  }
  constructor(props){
    super (props);
    this.state ={
    }
  }
  
  componentWillMount(){
    this.props.fetchChannelNews();
  }
  
   render(){
    const {news, isLoading, navigation} = this.props;
      return(
        <ScrollView>
        <View style={styles.containerHeader}>
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
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log("state",state)
  return{
    news: state.listChannelNews.listChannelNews,
    isLoading: state.listNews.isLoading,
    message: state.listNews.message
  }
}

const mapDispatchToProps = {
  fetchChannelNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedBoard);