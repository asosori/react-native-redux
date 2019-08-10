const restaurantFormUpdate = ({
  prop,
  value
}: {
  prop: string;
  value: string;
}) => {
  return { type: 'restaurant_form_update', payload: { prop, value } };
};

export default restaurantFormUpdate;
