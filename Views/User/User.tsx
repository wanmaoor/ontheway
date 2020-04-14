import React from 'react';
import {AsyncStorage, StyleSheet, Text} from 'react-native';
import {Card, Grid, Icon, WhiteSpace} from '@ant-design/react-native';
import UserData from '../../components/UserData';
import {serverUrl} from '../../config/constants';

const UserStyles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
  },
  thumbStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
    marginTop: 20,
  },
  footer: {marginBottom: 10},
  largeText: {fontSize: 14},
});
const largeText = (title: string) => (
  <Text style={UserStyles.largeText}>{title}</Text>
);

const gridData = [
  {
    icon: <Icon name={'eye'} size={'lg'} color={'#27AE60'} />,
    text: largeText('我的活动'),
  },
  {
    icon: <Icon name={'edit'} size={'lg'} color={'#2E86C1'} />,
    text: largeText('修改信息'),
  },
  {
    icon: <Icon name={'setting'} size={'lg'} color={'#2E4053'} />,
    text: largeText('设置'),
  },
];

class User extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '--',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
    };
  }
  getId = async () => {
    try {
      const id = await AsyncStorage.getItem('@user_id');
      if (id) {
        // value previously stored
        return id;
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };
  componentDidMount(): void {
    this.getId().then(res => console.log(res));
  }

  render(): React.ReactNode {
    return (
      <>
        <Card full={true}>
          <Card.Header
            title={<Text style={UserStyles.title}>{this.props.username}</Text>}
            thumbStyle={UserStyles.thumbStyle}
            thumb={this.props.avatar}
          />
          <Card.Footer
            content={<UserData totalTime={33} totalMileage={456} />}
            style={UserStyles.footer}
          />
        </Card>
        <WhiteSpace size={'md'} />
        <Grid
          data={gridData}
          columnNum={3}
          onPress={(_el, i) => {
            console.log(_el, i);
          }}
        />
      </>
    );
  }
}

export default User;
