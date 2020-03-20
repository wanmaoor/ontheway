import React, {useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {ScrollView, StyleSheet} from 'react-native';
import {WhiteSpace, SearchBar} from '@ant-design/react-native';
import BusCard from '../../components/BusCard';

const Traffic: React.FC<RouteComponentProps> = () => {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <SearchBar
        value={inputText}
        onChange={value => {
          setInputText(value);
        }}
        placeholder={'搜索公交车号'}
        onCancel={() => {
          setInputText('');
        }}
        showCancelButton={!!inputText}
      />
      <ScrollView style={TrafficStyle.sv}>
        <WhiteSpace size={'xl'} />
        <BusCard />
      </ScrollView>
    </>
  );
};

const TrafficStyle = StyleSheet.create({
  sv: {
    flex: 1,
  },
});

export default Traffic;
