//import HomeScreen from '../screens/Home';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens/screens';

registerScreens();

//Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'HomeScreen'
      }
    }
  });
});
