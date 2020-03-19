import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, InputItem, List, WingBlank} from '@ant-design/react-native';
import {Link, RouteComponentProps} from 'react-router-native';
import global from '../styles/global';
interface ILoginState {
  username: string;
  password: string;
}
class Login extends React.Component<RouteComponentProps, ILoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={LoginStyle.container}>
        <View style={LoginStyle.header}>
          <Text>公交出行系统</Text>
        </View>
        <WingBlank>
          <List renderHeader={'登录'}>
            <InputItem
              style={global.inputPadding}
              clear
              value={this.state.username}
              onChange={value => {
                this.setState({
                  username: value,
                });
              }}
              labelNumber={3}
              placeholder="输入用户名">
              姓名:
            </InputItem>
            <InputItem
              style={global.inputPadding}
              clear
              type="password"
              value={this.state.password}
              onChange={value => {
                this.setState({
                  password: value,
                });
              }}
              labelNumber={3}
              placeholder="请输入密码密码">
              密码:
            </InputItem>
          </List>
          <View style={LoginStyle.text}>
            <Text>没有账号? 快去</Text>
            <Link to={'/'}>
              <Text style={LoginStyle.textColor}> 注册吧</Text>
            </Link>
          </View>
          <View>
            <Button
              type={'primary'}
              style={LoginStyle.submit}
              onPressOut={() => {
                this.props.history.push('/nav');
              }}>
              登录
            </Button>
          </View>
        </WingBlank>
      </View>
    );
  }
}

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexDirection: 'column',
  },
  header: {
    flex: 1,
  },
  submit: {
    marginTop: 200,
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
    flexDirection: 'row',
  },
  textColor: {
    color: '#2e93ff',
  },
});

export default Login;
