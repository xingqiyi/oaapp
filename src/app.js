import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from './MainScreenNavigator';
import NewsDetailScreen from './discoverPages/NewsDetailScreen';
import NewsDetailScreen2 from './discoverPages/NewsDetailScreen2';

const OAApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  NewsDetail: { screen: NewsDetailScreen },
  NewsDetail2: { screen: NewsDetailScreen2 }

});

export default OAApp;
