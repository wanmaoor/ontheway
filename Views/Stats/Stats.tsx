import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {Text, View} from 'react-native';
const Stats: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text
        onPress={() => {
          history.push('/login');
        }}>
        统计
      </Text>
    </View>
  );
};

export default Stats;
