import { Navigation } from 'react-native-navigation';
import store from '../src/store';
import { Provider } from 'react-redux';
import HomeScreen from './Home';
import CreateScreen from './Create';

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
