import React, {
    Component,
} from 'react';

import {
	View,
	Text,
  StyleSheet,
  TabBarIOS,
  // TabBarItemIOS,
  Navigator,
} from 'react-native';

import Home from './Home'
import Finder from './Finder'
import Category from './Category'
import UserCenter from './UserCenter'

type Tab = 'Home' | 'Finder' | 'Category' | 'UserCenter';
type TabVC = Home | Finder | Category | UserCenter;

class TabBar extends Component {
  props:{
    navigator:Navigator;
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Finder',
      tabVC:Finder
      };
  }
  onTabSelect(tab: Tab,tabVC:TabVC) {
  if (this.state.selectedTab !== tab) {
    this.props.navigator.title == tab;
    this.setState({
      selectedTab: tab,
      tabVC:tabVC,
    });
  }
}
  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="blue"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
        title="Home"
        icon = {require('./img/home_unselected.png')}
        selectedIcon = {require('./img/home_selected.png')}
        selected={this.state.selectedTab === 'Home'}
        onPress={this.onTabSelect.bind(this, 'Home',Home)}
        >
        <Home/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        title="Finder"
        icon = {require('./img/finder_unselected.png')}
        selectedIcon = {require('./img/finder_selected.png')}
        selected={this.state.selectedTab === 'Finder'}
        onPress={this.onTabSelect.bind(this, 'Finder',Finder)}
        >
        <Finder
          navigator={this.props.navigator}
        />
        </TabBarIOS.Item>

        <TabBarIOS.Item
        title="Category"
        icon = {require('./img/category_unselected.png')}
        selectedIcon = {require('./img/category_selected.png')}
        selected={this.state.selectedTab === 'Category'}
        onPress={this.onTabSelect.bind(this, 'Category',Category)}
        >
        <Category/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        title="UserCenter"
        icon = {require('./img/usercenter_unselected.png')}
        selectedIcon = {require('./img/usercenter_selected.png')}
        selected={this.state.selectedTab === 'UserCenter'}
        onPress={this.onTabSelect.bind(this, 'UserCenter',UserCenter)}
        >
        <UserCenter
        navigator={this.props.navigator}
        />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',//容器内各项的对齐方式
    justifyContent: 'center'// 容器内容显示方式
  },
});

module.exports = TabBar;
// export default TabBar;
