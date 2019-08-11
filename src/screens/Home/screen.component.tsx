import React, { Component, Fragment } from 'react';
import { Header, Button, ListItem } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Text, FlatList } from 'react-native';

interface Props {
  componentId: string;
  restaurantFetch: () => void;
  restaurantList: any;
}

export default class HomeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    //this.fetchTasks();
    //console.log(this.props.restaurantFetch);
    this.props.restaurantFetch();
    //console.log(this.props.restaurantList);
    //this.moveEdit = this.moveEdit.bind(this);
  }

  // fetchTasks() {
  //   fetch('http://localhost:3001/tasks')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json); //this.setState({ tasks: json })
  //     });
  // }

  // moveEdit() {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: 'CreateScreen'
  //     }
  //   });
  // }

  // _renderItem = (item: any) => {
  //   //<Text>vdse</Text>;
  //   <ListItem title={item.name} subtitle={item.name} onPress={this.moveEdit} />;
  // };

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
        {/* <FlatList
          data={this.props.restaurantList}
          renderItem={this._renderItem}
        /> */}
      </Fragment>
    );
  }
}
