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

import NavigationUtil from '../navigator/NavigationUtil'

import DynamicTabNav from '../navigator/DynamicTabNav'

type Props = {};
export default class HomePage extends Component<Props> {
  
  render() {
    NavigationUtil.navigation = this.props.navigation
    
    return <DynamicTabNav/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
