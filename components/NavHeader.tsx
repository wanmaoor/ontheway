import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from '@ant-design/react-native';
import {RouteComponentProps} from 'react-router-native';
interface INavHeader extends RouteComponentProps {
  title: string;
  confirm: boolean;
}

const NavHeaderStyles = StyleSheet.create({
  textStyle: {
    color: '#F7F9F9',
    fontSize: 18,
  },
  rightText: {
    marginRight: 10,
  },
  leftIcon: {
    marginLeft: 10,
  },
});

const NavHeader: React.FC<INavHeader> = ({title, confirm, history}) => {
  return (
    <View style={NavHeaderStyle.navHeight}>
      <Icon
        name={'arrow-left'}
        size={'md'}
        color={'#F7F9F9'}
        style={NavHeaderStyles.leftIcon}
        onPress={() => {
          history.goBack();
        }}
      />
      <Text style={NavHeaderStyles.textStyle}>{title}</Text>
      {confirm ? (
        <Text style={[NavHeaderStyles.textStyle, NavHeaderStyles.rightText]}>
          确认
        </Text>
      ) : (
        ''
      )}
    </View>
  );
};

const NavHeaderStyle = StyleSheet.create({
  navHeight: {
    height: 50,
    backgroundColor: '#3498DB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default NavHeader;
