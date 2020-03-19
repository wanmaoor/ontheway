import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {Text, View} from 'react-native';
const Traffic: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text
        onPress={() => {
          history.push('/login');
        }}>
        路况
      </Text>
    </View>
  );
};

export default Traffic;
