import React, { Component, Fragment } from 'react';
import { Header, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Text } from 'react-native';

interface Props {
  componentId: string;
  restaurantFetch: any;
  restaurantList: any;
}

export default class HomeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    //this.fetchTasks();
    //console.log(this.props.restaurantFetch);
    this.props.restaurantFetch();
    //console.log(this.props.restaurantFetch());
  }

  // fetchTasks() {
  //   fetch('http://localhost:3001/tasks')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json); //this.setState({ tasks: json })
  //     });
  // }

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

        <Text>{this.props.restaurantList}</Text>
      </Fragment>
    );
  }
}
