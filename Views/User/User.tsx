import React from 'react';
import {Text, View} from 'react-native';
import {RouteComponentProps} from 'react-router-native';
const User: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <View>
      <Text
        onPress={() => {
          history.push('/login');
        }}>
        用户
      </Text>
    </View>
  );
};

export default User;
