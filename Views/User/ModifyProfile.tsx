import React from 'react';
import {INavProps, INavState, IUserInfo} from '../../custom';
import NavHeader from '../../components/NavHeader';
import ImagePicker from 'react-native-image-picker';
import {Icon, InputItem, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Image, Picker, Platform, StyleSheet, View} from 'react-native';
import {serverUrl} from '../../config/constants';
import RNFetchBlob from 'rn-fetch-blob';
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
const options = {
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从相册选择',
  cancelButtonTitle: '取消',
  title: '选择头像',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class ModifyProfile extends React.PureComponent<
  INavProps,
  IModifyProfileState
> {
  private readonly id: string;
  constructor(props: INavProps) {
    super(props);
    const {avatar, username, phone, gender, address, email, birth, id} = this
      .props.history.location.state as INavState;
    this.id = id;
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
            fetch(
              `${serverUrl}/edit?user_id=${this.id}&user_name=${
                this.state.username
              }&phone=${this.state.phone.split(' ').join('')}&email=${
                this.state.email
              }&sex=${this.state.gender}&head_img=${
                this.state.avatar
              }&address=${this.state.address}&born_date=${this.state.birth}`,
              {method: 'POST'},
            )
              .then(res => {
                return res.json();
              })
              .then(data => {
                console.log(data);
              });
          }}
        />
        <WingBlank>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{
                uri: this.state.avatar,
              }}
            />
            <Icon
              onPress={() => {
                ImagePicker.showImagePicker(options, response => {
                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else {
                    const source = {uri: response.uri, data: response.data};
                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({
                      avatar: source.uri,
                    });
                    // 进行文件提交
                    const PATH =
                      Platform.OS === 'android'
                        ? response.uri
                        : response.uri.replace('file:///', '');
                    RNFetchBlob.fetch(
                      'POST',
                      '123.57.55.107:5000/edit',
                      {
                        'Content-Type': 'multipart/form-data',
                      },
                      [
                        {
                          name: '用户头像',
                          filename: response.fileName || '未命名文件.jpg',
                          type: response.type,
                          data: RNFetchBlob.wrap(PATH),
                        },
                      ],
                    )
                      .then(resp => {
                        // ...
                        console.log(resp, 'resp');
                      })
                      .catch(err => {
                        // ...
                        console.log(err, 'err');
                      });
                  }
                });
              }}
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
