import React, { Component, Fragment } from 'react';
import { Header, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

interface Props {
  componentId: string;
}

class HomeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.fetchTasks();
  }

  fetchTasks() {
    fetch('http://localhost:3001/tasks')
      .then(response => response.json())
      .then(json => {
        console.log(json); //this.setState({ tasks: json })
      });
  }

  render() {
    return (
      <Fragment>
        <Header
          placement="left"
          centerComponent={{
            text: 'list of restaurants',
            style: { color: '#fff' }
          }}
        />

        <Button
          title="新規作成する"
          type="outline"
          onPress={() => {
            //console.log('gds');
            Navigation.push(this.props.componentId, {
              component: {
                name: 'CreateForm'
              }
            });
          }}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { restaurantlist: state.restaurantList };
};

export default connect(mapStateToProps)(HomeScreen);
