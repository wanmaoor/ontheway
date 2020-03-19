import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {WingBlank, Card, WhiteSpace} from '@ant-design/react-native';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

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
            <VictoryChart>
              <VictoryBar
                horizontal
                barWidth={30}
                cornerRadius={10}
                style={{
                  data: {fill: '#c43a31'},
                }}
                data={[
                  {x: 1, y: 2, y0: 2},
                  {x: 2, y: 3, y0: 2},
                  {x: 3, y: 5, y0: 2},
                  {x: 4, y: 4, y0: 2},
                  {x: 5, y: 6, y0: 2},
                ]}
              />
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
