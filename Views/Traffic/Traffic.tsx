import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {WingBlank, Card, WhiteSpace} from '@ant-design/react-native';

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
            <View style={{height: 42}}>
              <Text style={{marginLeft: 16}}>Card Content</Text>
            </View>
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
