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

class Login extends Component {
  props:{
    navigator:Navigator;
  };
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style = {styles.container}>
  			<Text style = {{fontSize: 18,fontWeight:'400',textAlign:'center',color:'red'}}>
        This is Login Page
        </Text>
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

module.exports = Login;
