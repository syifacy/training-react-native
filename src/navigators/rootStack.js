import { createStackNavigator } from 'react-navigation';
import NewsFeedBoard from '../screen/List/NewsFeedBoard';
import NewsDetails from '../screen/List/NewsDetails';

const RootStack = createStackNavigator({
  Home:{
    screen: NewsFeedBoard
  },
  NewsDetail:{
    screen: NewsDetails
  }
},{
  initialRouteName: 'Home',
  navigationOptions:{
    headerStyle:{
      backgroundColor: '#660033'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }
}
)

export default RootStack;