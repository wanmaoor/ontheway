import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {View} from 'react-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';
import UserData from '../../components/UserData';

const User: React.FC<RouteComponentProps> = () => {
  return (
    <Card full={true} style={{backgroundColor: '#17A589'}}>
      <Card.Header
        title="拖米"
        thumbStyle={{
          width: 60,
          height: 60,
          borderRadius: 50,
          marginRight: 20,
        }}
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
      />
      <Card.Footer content={<UserData />} />
    </Card>
  );
};

export default User;
