import { Navigation } from 'react-native-navigation';
import store from '../store';
import { Provider } from 'react-redux';
import HomeScreen from './Home/screen.component';
import CreateScreen from './Create/screen.container';

export const registerScreens = () => {
  Navigation.registerComponentWithRedux(
    'HomeScreen',
    () => HomeScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    'CreateForm',
    () => CreateScreen,
    Provider,
    store
  );
};
