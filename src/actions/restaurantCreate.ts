import moveToHome from './moveToHome';

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
  componentId: string
) => {
  fetch('http://localhost:3001/restaurants', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, station, comment })
  }).then(moveToHome(componentId));
  return { type: 'restaurant_form_after_create' };
};
