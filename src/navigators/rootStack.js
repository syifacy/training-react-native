import { createStackNavigator } from 'react-navigation';
import NewsFeedBoard from '../screen/List/NewsFeedBoard';
import NewsDetails from '../screen/List/NewsDetails';
import WebviewComponent from '../components/WebView/WebViewComponent';


const RootStack = createStackNavigator({
  Home:{
    screen: NewsFeedBoard
  },
  NewsDetail:{
    screen: NewsDetails
  },
  WebviewComponent:{
    screen: WebviewComponent
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