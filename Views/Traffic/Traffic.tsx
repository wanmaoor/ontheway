import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {WingBlank, Card, WhiteSpace} from '@ant-design/react-native';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];
const Traffic: React.FC<RouteComponentProps> = () => {
  return (
    <ScrollView style={TrafficStyle.sv}>
      <WhiteSpace size={'xl'} />
      <WingBlank size="lg">
        <Card>
          <Card.Header
            title={<Text style={TrafficStyle.cardText}>117路</Text>}
            extra="往xxx方向"
          />
          <Card.Body>
            <VictoryChart width={350} theme={VictoryTheme.material}>
              <VictoryBar data={data} x="quarter" y="earnings" />
            </VictoryChart>
          </Card.Body>
          <Card.Footer content="准载人数: 32" />
        </Card>
      </WingBlank>
    </ScrollView>
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
