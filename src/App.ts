import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens/screens';
import ReduxThunk from 'redux-thunk';

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
