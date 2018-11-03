import { createStackNavigator } from 'react-navigation';
import News from '../screen/List/BoardList';
import NewsDetails from '../screen/List/NewsDetails';

const RootStack = createStackNavigator({
  Home:{
    screen: News
  },
  NewsDetail:{
    screen: NewsDetails
  }
},{
  initialRouteName: 'Home',
  navigationOptions:{
    headerStyle:{
      backgroundColor: '#ff8000'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }
}
)

export default RootStack;