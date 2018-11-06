import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  ActivityIndicator,
 
} from 'react-native';
import FlatLIstChannelCell from '../../components/FlatList/FlatLIstChannelCell';
import styles from './NewsFeedBoard.style';
import {fetchChannelNews} from '../../actions/NewsAction';

class NewsFeedBoard extends Component {
  static navigationOptions = {
    title: 'News Feed'
  }
  constructor(props){
    super (props);
   
  }
  componentWillMount(){
    this.props.fetchChannelNews();
  }
   render(){
    const {newsChannel, isLoading, navigation} = this.props;
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
            <FlatLIstChannelCell
              listNews = {newsChannel}
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
  
  return{
    newsChannel: state.listChannelNews.listChannelNews,
    isLoading: state.listChannelNews.isLoading,
    message: state.listChannelNews.message
  }
}

const mapDispatchToProps = {
  fetchChannelNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedBoard);