import React, { Fragment, Component } from 'React';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

class Create extends Component {

  create_review(){
    const { place, station, comment } = this.props.restaurantForm;
    this.props.createReview({ place, station, comment });
  }

  render(){
    return(
      <Fragment>
        <Text>fadfdas</Text>

        <Input
          placeholder='場所'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />

        <Input
          placeholder='最寄駅'
          shake={true}
        />

        <Input
          placeholder='コメント'
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />

        <Button 
          title="create a review"
          onPress={this.create_review.bind(this)}
        />

    </Fragment>
    )
  }
}

const mapStateToProps = state => {
  restaurantForm: state.restaurantForm
};

export default connect(mapStateToProps, { createReview })(Create);
