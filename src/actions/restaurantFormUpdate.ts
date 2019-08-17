const restaurantFormUpdate = ({
  prop,
  value
}: {
  prop: string;
  value: string | number;
}) => {
  return { type: 'restaurant_form_update', payload: { prop, value } };
};

export default restaurantFormUpdate;
