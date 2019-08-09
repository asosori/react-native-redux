import React, { Fragment, Component } from 'React';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import restaurantFormUpdate from '../actions/restaurantFormUpdate';

interface Props {
  componentId: string;
  restaurantForm: any;
  restaurantFormUpdate: (props: {
    prop: string;
    value: string;
  }) => { type: string; payload: any };
}

class Create extends Component<Props> {
  constructor(props: Props) {
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
        <Input
          placeholder="店の名前"
          value={name}
          onChangeText={text => console.log(this.props)}
        />

        <Input
          placeholder="最寄駅"
          value={station}
          onChangeText={text =>
            this.props.restaurantFormUpdate({ prop: 'station', value: text })
          }
        />

        <Input
          placeholder="コメント"
          value={comment}
          onChangeText={text =>
            this.props.restaurantFormUpdate({ prop: 'comment', value: text })
          }
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    restaurantFormUpdate: () => dispatch(restaurantFormUpdate)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
