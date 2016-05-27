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

import Login from './Login'

type Tag = 'login' | 'shoppingCar' | 'myOrder' | 'MyCoupon' | 'cusSys' | 'more' | 'develop';

class UserInfoSet extends Component {
  props:{
    navigator:Navigator;
  };
  constructor(props) {
    super(props);
  }
  _onSelected(tag:Tag) {
    switch (tag) {
      case 'login':
        this._openPage('login',Login);
        break;
      default:
    }
  }
  _openPage(title:string,component:Component){
    this.props.navigator.push({
        title: title,
  			component: component
		});
  }

  render(){
    return (
      <View style = {styles.container}>
  			<Text style = {{fontSize: 18,fontWeight:'400',textAlign:'center',color:'red'}}>
        This is UserInfoSet Page
        </Text>
  		</View>
  );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop:64,
    flex: 1,
    alignItems: 'stretch',//容器内各项的对齐方式
    justifyContent: 'flex-start',// 容器内容显示方式
  },
});

module.exports = UserInfoSet;
