import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens/screens';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'HomeScreen',
              name: 'HomeScreen'
            }
          }
        ]
      }
    }
  });
});
