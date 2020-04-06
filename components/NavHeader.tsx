import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface INavHeader {
  title: string;
  confirm: boolean;
}

const NavHeader: React.FC<INavHeader> = ({title, confirm}) => {
  return (
    <View style={NavHeaderStyle.navHeight}>
      <Text>{title}</Text>
      {confirm ? <Text>确认</Text> : ''}
    </View>
  );
};

const NavHeaderStyle = StyleSheet.create({
  navHeight: {
    height: 50,
    backgroundColor: '#5DADE2',
  },
});

export default NavHeader;
