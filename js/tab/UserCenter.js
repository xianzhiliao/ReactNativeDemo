import React, {
    Component,
} from 'react';

import {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import UserInfoSet from '../userCenter/UserInfoSet'


class UserCenter extends Component {
  props:{
    navigator:Navigator;
  };
  constructor(props) {
    super(props);
  }
  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
  _openPage() {
		this.props.navigator.push({
			title: 'UserInfoSet',
			component: UserInfoSet
		})
	}
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {{fontSize: 18,fontWeight:'400',textAlign:'center',color:'red'}}>
        This is Finder Page
        </Text>
        <TouchableOpacity onPress={this._openPage.bind(this)}>
          <Text style={{ color: '#55ACEE' }}>go to set info</Text>
        </TouchableOpacity>
      </View>
  );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',//容器内各项的对齐方式
    justifyContent: 'center',// 容器内容显示方式
  },
});

module.exports = UserCenter;
