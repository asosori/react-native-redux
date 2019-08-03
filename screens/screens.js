import { Navigation } from 'react-native-navigation';
import HomeScreen from './Home';
import CreateScreen from './Create';

export const registerScreens = () => {
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('CreateForm', () => CreateScreen);
}