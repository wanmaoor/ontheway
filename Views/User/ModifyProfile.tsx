import React from 'react';
import {INavProps, IUserInfo} from '../../custom';
import NavHeader from '../../components/NavHeader';
import ImagePicker from 'react-native-image-picker';
import {Icon, InputItem, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Image, Picker, StyleSheet, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    position: 'relative',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    opacity: 0.7,
  },
  icon: {
    position: 'absolute',
    top: 42,
    left: 21,
  },
  radio: {height: 50, width: 150},
});
interface IModifyProfileState extends IUserInfo {
  value?: any[];
  date?: Date;
}
class ModifyProfile extends React.PureComponent<
  INavProps,
  IModifyProfileState
> {
  constructor(props: INavProps) {
    super(props);
    const {avatar, username, phone, gender, address, email, birth} = this.props
      .history.location.state as IUserInfo;
    this.state = {
      username,
      avatar,
      email,
      gender,
      address,
      birth,
      phone,
    };
  }

  render(): React.ReactNode {
    return (
      <>
        <NavHeader
          title={'修改个人信息'}
          {...this.props}
          cb={() => {
            console.log(this.state);
          }}
        />
        <WingBlank>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{
                uri:
                  'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
              }}
            />
            <Icon
              name={'camera'}
              size={'lg'}
              color={'#333333'}
              style={styles.icon}
            />
          </View>
          <WhiteSpace />
          <InputItem
            clear
            labelNumber={5}
            value={this.state.username}
            onChange={val => this.setState({username: val})}>
            用户名:
          </InputItem>
          <WhiteSpace />
          <InputItem
            clear
            labelNumber={5}
            type="phone"
            value={this.state.phone}
            onChange={value => {
              this.setState({
                phone: value,
              });
            }}
            placeholder="输入电话号码">
            手机号:
          </InputItem>
          <WhiteSpace />
          <InputItem
            clear
            labelNumber={5}
            value={this.state.email}
            onChange={val => this.setState({email: val})}>
            电子邮箱:
          </InputItem>
          <WhiteSpace />
          <WingBlank>
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.gender}
              style={styles.radio}
              onValueChange={itemValue => this.setState({gender: itemValue})}>
              <Picker.Item label="男" value="男" />
              <Picker.Item label="女" value="女" />
            </Picker>
          </WingBlank>
          <WhiteSpace />
          <InputItem
            clear
            labelNumber={5}
            value={this.state.address}
            onChange={val => this.setState({address: val})}>
            地址:
          </InputItem>
          <WhiteSpace />
          <InputItem
            clear
            labelNumber={5}
            placeholder={'如: 1997-10-03'}
            value={this.state.birth}
            onChange={val => this.setState({birth: val})}>
            出生日期:
          </InputItem>
        </WingBlank>
      </>
    );
  }
}

export default ModifyProfile;
