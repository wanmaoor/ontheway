import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, InputItem, List} from '@ant-design/react-native';
import {Link, RouteComponentProps} from 'react-router-native';
import global from '../styles/global';
interface ISignUpState {
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
  error: boolean;
}
export default class SignUp extends React.Component<
  RouteComponentProps,
  ISignUpState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      username: '',
      phone: '',
      password: '',
      confirmPassword: '',
      error: false,
    };
    console.log(this.props.match);
  }
  compare = () => {
    this.setState(state => {
      return state.password !== state.confirmPassword
        ? {error: true}
        : {error: false};
    });
  };

  render() {
    return (
      <View style={SignUpStyle.container}>
        <View style={SignUpStyle.header}>
          <Text>公交出行系统</Text>
        </View>
        <List renderHeader={'注册信息'}>
          <InputItem
            style={global.inputPadding}
            clear={true}
            value={this.state.username}
            onChange={value => {
              this.setState({
                username: value,
              });
            }}
            labelNumber={5}
            placeholder="输入用户名">
            姓名:
          </InputItem>
          <InputItem
            style={global.inputPadding}
            clear
            type="phone"
            value={this.state.phone}
            onChange={value => {
              this.setState({
                phone: value,
              });
            }}
            labelNumber={5}
            placeholder="输入电话号码">
            手机号:
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
            labelNumber={5}
            placeholder="请输入密码密码">
            密码:
          </InputItem>
          <InputItem
            style={global.inputPadding}
            clear
            type="password"
            value={this.state.confirmPassword}
            onChange={value => {
              this.setState({
                confirmPassword: value,
              });
              this.compare();
            }}
            error={this.state.error}
            extra={this.state.error ? '两次密码不匹配' : ''}
            labelNumber={5}
            placeholder="再次确认密码">
            输入密码:
          </InputItem>
        </List>
        <View style={SignUpStyle.text}>
          <Text>已有账号? 快去</Text>
          <Link to={`${this.props.match.url}login`}>
            <Text style={SignUpStyle.textColor}> 登录吧</Text>
          </Link>
        </View>
        <Button
          type={'primary'}
          style={SignUpStyle.submit}
          onPress={this.handlePress}>
          提交
        </Button>
      </View>
    );
  }

  handlePress = () => {
    if (this.state.username && this.state.phone) {
      console.log('注册好了');
    }
    return undefined;
  };
}

const SignUpStyle = StyleSheet.create({
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
  },
  text: {
    marginTop: 10,
    flexDirection: 'row',
  },
  textColor: {
    color: '#2e93ff',
  },
});
