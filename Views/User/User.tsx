import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {Text, View} from 'react-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';
import UserData from '../../components/UserData';

interface IUser extends RouteComponentProps {
  username: string;
}

const User: React.FC<IUser> = ({username}) => {
  return (
    <Card full={true}>
      <Card.Header
        title={
          <Text style={{fontWeight: 'bold', fontSize: 24, marginTop: 15}}>
            {username}
          </Text>
        }
        thumbStyle={{
          width: 60,
          height: 60,
          borderRadius: 50,
          marginRight: 20,
          marginTop: 20,
        }}
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
      />
      <Card.Footer content={<UserData />} style={{marginBottom: 10}} />
    </Card>
  );
};

export default User;
