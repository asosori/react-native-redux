import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

interface Props {
  restaurantForm: any;
}

class Create extends Component<Props> {
  constructor(props) {
    super(props);
    this.createReview = this.createReview.bind(this);
  }

  createReview() {
    //console.log('gfffwas');
    //const { name, station, comment } = this.props.restaurantForm;
    //this.props.createReview({ name, station, comment });
  }

  render() {
    const { name, station, comment } = this.props.restaurantForm;

    return (
      <Fragment>
        <Input placeholder="店の名前" value={name} />

        <Input placeholder="最寄駅" />

        <Input
          placeholder="コメント"
          //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />

        <Button
          title="create a review"
          onPress={() => {
            //console.log('fafkuyds');
            this.createReview();
          }}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    restaurantForm: state.restaurantForm
  };
};

export default connect(mapStateToProps)(Create);
