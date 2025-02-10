import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import NoteScreen from './components/NoteScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Note: NoteScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
