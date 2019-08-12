import React, { Component, Fragment } from 'react';
import { Header, Button, ListItem } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Text, FlatList, ListRenderItemInfo } from 'react-native';

interface Props {
  componentId: string;
  restaurantFetch: () => void;
  restaurantList: Array<{ name: string; station: string; comment: string }>;
}

export default class HomeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    //console.log(this.props.restaurantFetch);
    this.props.restaurantFetch();
    //console.log(this.props.restaurantList);
    this.moveEditScreen = this.moveEditScreen.bind(this);
    //this._renderItem = this._renderItem.bind(this);
  }

  moveEditScreen(data: { name: string; station: string; comment: string }) {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'EditScreen',
        passProps: {
          restaurant: data
        }
      }
    });
  }

  renderItem = (
    info: ListRenderItemInfo<{ name: string; station: string; comment: string }>
  ) => {
    return (
      <ListItem
        title={info.item.name}
        onPress={() => this.moveEditScreen(info.item)}
      />
    );
  };

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

        <FlatList
          data={this.props.restaurantList}
          renderItem={this.renderItem}
        />
      </Fragment>
    );
  }
}
