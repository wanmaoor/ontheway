import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WhiteSpace} from '@ant-design/react-native';

interface IFProps {
  name: string;
  detail: string;
}

interface IUserProps {
  totalTime: number;
  totalMileage: number;
}

const F: React.FC<IFProps> = ({name, detail}) => {
  return (
    <View style={UserDataStyles.innerContainer}>
      <WhiteSpace size={'lg'} />
      <Text style={UserDataStyles.detail}>{detail}</Text>
      <Text style={UserDataStyles.name}>{name}</Text>
    </View>
  );
};

const UserData: React.FC<IUserProps> = ({totalTime, totalMileage}) => {
  return (
    <View style={UserDataStyles.container}>
      <F name={'总时间'} detail={`${totalTime}h`} />
      <Text style={UserDataStyles.middleSlash}> | </Text>
      <F name={'总里程'} detail={`${totalMileage}km`} />
    </View>
  );
};

const UserDataStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  detail: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  middleSlash: {transform: [{scale: 2}], color: '#BDC3C7'},
});

export default UserData;
