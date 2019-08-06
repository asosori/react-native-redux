import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

export default class HomeScreen extends Component {
  render() {
    return (
      <Fragment>
        <Header
          placement="left"
          centerComponent={{ text: 'list of restaurants', style: { color: '#fff' } }}
        />
        <TouchableOpacity onPress={() => alert("foo")} style={{ backgroundColor: "red" }}>
          <Text>Button</Text>
        </TouchableOpacity>
        <Button
          title="新規作成する"
          type="outline"
          onPress={() => {
            alert("foo");
            Navigation.push(this.props.componentId,{
              component: {
                name: 'CreateForm'
              }
            })    
          }}
        />
      </Fragment>
    );
  }
}