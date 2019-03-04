import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';

export const rootCom = 'Init';//设置根路由
const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
   
  }
},{
  navigationOptions: {
    header: null
  }
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
   
  },
},{
  navigationOptions: {
    // header: null
  }
});

export const RootNavigator = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
  
},{
  navigationOptions: {
    // header: null
  }
});

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');


const mapStateToProps = state => ({
    state: state.nav,//v2
});

export default connect(mapStateToProps)(AppWithNavigationState);


