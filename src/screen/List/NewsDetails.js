import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import FlatListCell from '../../components/FlatList/FlatListCell';
import {fetchListNews} from '../../actions/NewsAction';
import styles from './NewsFeedBoard.style';



class NewsDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    
    return {
      title: 'News From '+navigation.state.params.title,
    };
  };
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    const params = this.props.navigation.state.params.title;
    this.props.fetchListNews(params);
  }

  render() {
    const {isLoading, listFetchNews,navigation} = this.props;
    return(
      <ScrollView>
      {
        isLoading?
        <View style={[styles.containerLoading, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
        :
        <View style={styles.containerFlatList}>
            <FlatListCell
              listNews = {listFetchNews}
              navigation={navigation}
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
    isLoading: state.listNews.isLoading,
    listFetchNews: state.listNews.listNews,
    message: state.listNews.message
  }
};
const mapDispatchToProps = {
  fetchListNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);