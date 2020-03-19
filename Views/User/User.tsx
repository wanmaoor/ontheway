import React from 'react';
import {Text} from 'react-native';
import {RouteComponentProps} from 'react-router-native';
import Layout from '../../components/Layout';
const User: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <Layout>
      <Text
        onPress={() => {
          history.push('/login');
        }}>
        用户
      </Text>
    </Layout>
  );
};

export default User;
