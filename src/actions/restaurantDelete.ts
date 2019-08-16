import { Navigation } from 'react-native-navigation';

const moveToHome = (componentId: string): void => {
  Navigation.push(componentId, {
    component: {
      name: 'HomeScreen'
    }
  });
};

export default (restaurantId: number, componentId: string) => {
  fetch('http://localhost:3001/restaurants/' + restaurantId, {
    method: 'DELETE'
  }).then(moveToHome(componentId));
  return { type: 'restaurant_form_after_delete' };
};
