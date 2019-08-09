const restaurantFormUpdate = ({ prop, value }) => {
  return (
    { type: "restaurant_form_update", payload: { prop, value } }
  )
}

export default restaurantFormUpdate;