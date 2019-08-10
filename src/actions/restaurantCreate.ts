export default ({
  name,
  station,
  comment
}: {
  name: string;
  station: string;
  comment: string;
}) => {
  return { type: 'restaurant_create', payload: { name, station, comment } };
};
