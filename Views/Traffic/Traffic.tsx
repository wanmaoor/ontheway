import React, {useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {ScrollView, StyleSheet} from 'react-native';
import {SearchBar, WhiteSpace} from '@ant-design/react-native';
import BusCard from '../../components/BusCard';

const Traffic: React.FC<RouteComponentProps> = props => {
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
        <BusCard busName={'117'} payload={32} maxPayload={32} {...props} />
        <BusCard busName={'720'} payload={16} maxPayload={64} {...props} />
        <BusCard busName={'723'} payload={30} maxPayload={48} {...props} />
        <BusCard busName={'118'} payload={4} maxPayload={64} {...props} />
        <WhiteSpace size={'lg'} />
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
