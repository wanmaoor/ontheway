import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {Text, View} from 'react-native';
const User: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
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
