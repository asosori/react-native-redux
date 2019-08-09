import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

interface Props {
  componentId: string;
}

export default class HomeScreen extends Component<Props> {
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
