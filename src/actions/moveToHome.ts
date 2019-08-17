import { Navigation } from 'react-native-navigation';

const moveToHome = (componentId: string): any => {
  Navigation.push(componentId, {
    component: {
      name: 'HomeScreen'
    }
  });
};

export default moveToHome;
