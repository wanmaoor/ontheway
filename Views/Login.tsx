import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Button,
  InputItem,
  List,
  Provider,
  Toast,
  WingBlank,
} from '@ant-design/react-native';
import {Link, RouteComponentProps} from 'react-router-native';
import global from '../styles/global';
import {serverUrl} from '../config/constants';
interface ILoginState {
  id: string;
  password: string;
}
class Login extends React.Component<RouteComponentProps, ILoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    if (this.state.id && this.state.password) {
      fetch(
        `${serverUrl}/login?user_id=${this.state.id}&password=${
          this.state.password
        }&timestamp=2020-04-12 21:04:58&longitude=30.753&latitude=103.95`,
        {
          method: 'GET',
        },
      )
        .then(res => res.json(), err => console.error('序列化失败: ', err))
        .then(res => {
          console.log('登录后: ', res);
          AsyncStorage.setItem('@user_id', this.state.id).then(() => {
            this.props.history.push('/');
          });
        });
    } else {
      Toast.fail('完善登录信息', 2);
    }
  }
  render() {
    return (
      <Provider>
        <View style={LoginStyle.container}>
          <View style={LoginStyle.header}>
            <Text>公交出行系统</Text>
          </View>
          <WingBlank>
            <List renderHeader={'登录'}>
              <InputItem
                style={global.inputPadding}
                clear
                value={this.state.id}
                onChange={value => {
                  this.setState({
                    id: value,
                  });
                }}
                labelNumber={3}
                placeholder="输入id号">
                id号:
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
              <Link to={'/signup'}>
                <Text style={LoginStyle.textColor}> 注册吧</Text>
              </Link>
            </View>
            <View>
              <Button
                type={'primary'}
                style={LoginStyle.submit}
                onPressOut={this.handleLogin}>
                登录
              </Button>
            </View>
          </WingBlank>
        </View>
      </Provider>
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
