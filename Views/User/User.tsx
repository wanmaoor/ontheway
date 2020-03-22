import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {StyleSheet, Text, View} from 'react-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';
import UserData from '../../components/UserData';

interface IUser extends RouteComponentProps {
  username: string;
}

const User: React.FC<IUser> = ({username}) => {
  return (
    <Card full={true}>
      <Card.Header
        title={<Text style={UserStyles.title}>{username}</Text>}
        thumbStyle={{
          width: 60,
          height: 60,
          borderRadius: 50,
          marginRight: 20,
          marginTop: 20,
        }}
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
      />
      <Card.Footer content={<UserData />} style={UserStyles.footer} />
    </Card>
  );
};

const UserStyles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
  },
  footer: {marginBottom: 10},
});

export default User;
