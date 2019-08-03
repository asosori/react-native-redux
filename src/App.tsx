import HomeScreen from '../screens/Home';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'HomeScreen'
      }
    }
  });
});
