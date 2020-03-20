import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {WingBlank, Card, WhiteSpace, SearchBar} from '@ant-design/react-native';
import Svg, {Rect} from 'react-native-svg';

const Traffic: React.FC<RouteComponentProps> = () => {
  const [inputText, setInputText] = useState('');
  const [amount, setAmount] = useState(50);
  const width = 220;
  useEffect(() => {
    if (amount < width) {
      let id = setInterval(() => {
        setAmount(amount + 10);
      }, 10);
      return () => {
        clearInterval(id);
      };
    }
  }, [amount]);
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
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title={<Text style={TrafficStyle.cardText}>117路</Text>}
              extra="往xxx方向"
            />
            <Card.Body>
              <View>
                <WingBlank>
                  <Text>11:00发车</Text>
                </WingBlank>
                <Svg width="200" height="60">
                  <Rect
                    x="15"
                    y="15"
                    width={amount}
                    height="40"
                    fill="#c43a31"
                  />
                </Svg>
              </View>
            </Card.Body>
            <Card.Footer content="准载人数: 32" />
          </Card>
        </WingBlank>
      </ScrollView>
    </>
  );
};

const TrafficStyle = StyleSheet.create({
  sv: {
    flex: 1,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Traffic;
