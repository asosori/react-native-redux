import { Navigation } from 'react-native-navigation';
import store from '../store';
import { Provider } from 'react-redux';
import HomeScreen from './Home/screen.container';
import CreateScreen from './Create/screen.container';
import EditScreen from './Edit/screen.container';

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

  Navigation.registerComponentWithRedux(
    'EditScreen',
    () => EditScreen,
    Provider,
    store
  );
};
