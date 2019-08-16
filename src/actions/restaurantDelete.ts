import moveToHome from './moveToHome';

export default (restaurantId: number, componentId: string) => {
  fetch('http://localhost:3001/restaurants/' + restaurantId, {
    method: 'DELETE'
  }).then(moveToHome(componentId));
  return { type: 'restaurant_form_after_delete' };
};
