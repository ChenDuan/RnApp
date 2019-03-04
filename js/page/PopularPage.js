/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import NavigationUtil from '../navigator/NavigationUtil'

type Props = {};
export default class PopularPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.tabNames = ['Java','iOS','C++','Vue','Html','CSS']
  }
  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item,index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab{...props} tabLabel={item}/>,
        navigationOptions:{
          title: item
        }
      }
    });
    return tabs
  }
  render() {
    const TabNavigator = createMaterialTopTabNavigator(
      this._genTabs(),{
        tabBarOptions: {
          tabStyle: styles.tabStyle,
          upperCaseLabel: false,
          scrollEnabled: true,
          style: {
            backgroundColor: '#678'
          },
          indicatorStyle: styles.indicatorStyle,
          labelStyle: styles.labelStyle
        }
      }
    );
    return (
      <View style={{flex:1,marginTop:30}}>
        <TabNavigator />
      </View>
    );
  }
}

class PopularTab extends Component<Props> {
  render() {
    const { tabLabel } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text onPress={()=>{
          NavigationUtil.goPage({
            navigation: this.props.navigation
          },"DetailPage")
        }}>跳转到详情</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
    
  },
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  }
});
