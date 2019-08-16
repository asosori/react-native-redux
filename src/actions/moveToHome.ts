import { Navigation } from 'react-native-navigation';

const moveToHome = (componentId: string): void => {
  Navigation.push(componentId, {
    component: {
      name: 'HomeScreen'
    }
  });
};

export default moveToHome;
