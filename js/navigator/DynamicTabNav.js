/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage'
import NavigationUtil from './NavigationUtil'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from 'react-native-vector-icons/Entypo'
import {BottomTabBar} from 'react-navigation-tabs'
import { createBottomTabNavigator } from "react-navigation";
import {connect} from 'react-redux';

const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: "最热",
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={"whatshot"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: "趋势",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={"md-trending-up"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: "收藏",
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={"favorite"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo
          name={"user"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }
}



class DynamicTabNav extends Component<Props> {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }
  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS
    const tabs = {PopularPage, TrendingPage,FavoritePage, MyPage}
    return createBottomTabNavigator(tabs,{
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}/>
      }
    })
  }
  render() {
    NavigationUtil.navigation = this.props.navigation
    const Tab = this._tabNavigator();
    return <Tab/>
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }
  render() {
    
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor = {this.props.theme}
      />
    )
  }
}


const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNav);
