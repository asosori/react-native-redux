import { Navigation } from 'react-native-navigation';

export default (
  data: { name: string; station: string; comment: string },
  componentId: string
) => {
  Navigation.push(componentId, {
    component: {
      name: 'EditScreen',
      passProps: {
        restaurant: data
      }
    }
  });
};
