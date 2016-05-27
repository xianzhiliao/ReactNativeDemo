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

import Login from '../userCenter/Login'
import UserInfoSet from '../userCenter/UserInfoSet'

type Tag = 'login' | 'userInfoSet' | 'shoppingCar' | 'myOrder' | 'MyCoupon' | 'cusSys' | 'more' | 'develop';

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
  _onSelected(tag:Tag) {
    switch (tag) {
      case 'login':
        // this._openPage('login',Login);
        this._openPage('userInfoSet',UserInfoSet);
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
        <TouchableOpacity
          onPress={this._onSelected.bind(this,'login')}
          style= {{backgroundColor: 'gray',height:90,flexDirection:'horization'}}
        >
          <Image
            style = {{marginTop:15,marginLeft:15}}
            source={require('../userCenter/img/usercenter_default_head.png')}
          />
          <Text style={{ color: '#55ACEE', textAlign:'left'}}>未登录</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={this._onSelected.bind(this,'shoppingCar')}>
        <Text style={{ color: '#55ACEE',  textAlign:'center'}}>购物车</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onSelected.bind(this,'myOrder')}>
        <Text style={{ color: '#55ACEE',  textAlign:'center'}}>我的订单</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onSelected.bind(this,'MyCoupon')}>
        <Text style={{ color: '#55ACEE',  textAlign:'center'}}>我的优惠</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onSelected.bind(this,'cusSys')}>
        <Text style={{ color: '#55ACEE',  textAlign:'center'}}>客服与反馈</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onSelected.bind(this,'more')}>
        <Text style={{ color: '#55ACEE',  textAlign:'center'}}>更多</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onSelected.bind(this,'develop')}>
        <Text style={{ color: '#55ACEE',  textAlign:'center'}}>开发者中心</Text>
      </TouchableOpacity>
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

module.exports = UserCenter;
