import React, { Component, Fragment } from 'react';
import { Header, Button, ListItem } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Text, FlatList, ListRenderItemInfo } from 'react-native';
import moveToEdit from '../../actions/moveToEdit';

interface otherProps {
  componentId: string;
}

export interface State {
  restaurantForm: { name: string; station: string; comment: string };
  restaurantList: Array<{ name: string; station: string; comment: string }>;
}

export interface StateProps {
  restaurantList: Array<{ name: string; station: string; comment: string }>;
}

export interface DispatchProps {
  restaurantFetch: () => void;
  formReset: () => void;
}

type Props = State & StateProps & DispatchProps & otherProps;

export default class HomeScreen extends Component<Props> {
  static options() {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'buttonOne',
            text: 'button'
          }
        ]
      }
    };
  }
  constructor(props: Props) {
    super(props);
    this.props.restaurantFetch();
    this.props.formReset();
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'myDynamicButton',
            text: 'My Button'
          }
        ]
      }
    });
  }

  renderItem = (
    info: ListRenderItemInfo<{ name: string; station: string; comment: string }>
  ) => {
    return (
      <ListItem
        title={info.item.name}
        onPress={() => moveToEdit(info.item, this.props.componentId)}
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
