import { Navigation } from 'react-native-navigation';

const moveToHome = (componentId: string): void => {
  Navigation.push(componentId, {
    component: {
      name: 'HomeScreen'
    }
  });
};

export default (
  {
    name,
    station,
    comment
  }: {
    name: string;
    station: string;
    comment: string;
  },
  restaurantId: number,
  componentId: string
) => {
  fetch('http://localhost:3001/restaurants/' + restaurantId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, station, comment })
  }).then(moveToHome(componentId));
  return { type: 'restaurant_form_after_edit' };
};
