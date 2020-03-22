import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {StyleSheet, Text} from 'react-native';
import {Card, Grid, Icon, WhiteSpace} from '@ant-design/react-native';
import UserData from '../../components/UserData';

interface IUser extends RouteComponentProps {
  username: string;
}
const largeText = (title: string) => (
  <Text style={{fontSize: 14}}>{title}</Text>
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

const User: React.FC<IUser> = ({username}) => {
  return (
    <>
      <Card full={true}>
        <Card.Header
          title={<Text style={UserStyles.title}>{username}</Text>}
          thumbStyle={UserStyles.thumbStyle}
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
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
        onPress={(_el, index) => alert(index)}
      />
    </>
  );
};

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
});

export default User;
