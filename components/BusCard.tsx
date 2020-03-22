import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

interface IBusCardProps extends RouteComponentProps {
  busName: string;
  payload: number;
  maxPayload: number;
}

const BusCard: React.FC<IBusCardProps> = ({busName, payload, maxPayload}) => {
  const [amount, setAmount] = useState(0);
  const divide = payload / maxPayload;
  const width = 300 * divide;
  const colors = [
    ['#c43a31', '满载'],
    ['#229954', '不挤'],
    ['#F1C40F', '拥挤'],
  ];
  let fillColor: string;
  let statusText;
  if (divide > 0 && divide <= 0.4) {
    fillColor = colors[1][0];
    statusText = colors[1][1];
  } else if (divide > 0.4 && divide <= 0.7) {
    fillColor = colors[2][0];
    statusText = colors[2][1];
  } else {
    fillColor = colors[0][0];
    statusText = colors[0][1];
  }
  useEffect(() => {
    if (amount < width) {
      let id = setInterval(() => {
        setAmount(amount + 10);
      }, 0);
      return () => {
        clearInterval(id);
      };
    }
  }, [amount, width]);

  return (
    <WingBlank size="lg">
      <WhiteSpace size={'lg'} />
      <Card>
        <Card.Header
          title={<Text style={BusCardStyle.cardText}>{busName}</Text>}
          extra="11:00发车"
        />
        <Card.Body>
          <View>
            <Svg width="400" height="80" title={'拥挤程度'}>
              <Rect
                x="15"
                y="10"
                width={300}
                height="60"
                strokeWidth={1}
                stroke={'#CCD1D1'}
                rx={5}
              />
              <Rect
                x="15"
                y="10"
                width={amount}
                height="60"
                fill={fillColor}
                rx={5}
              />
              <Text style={[BusCardStyle.SVGText, {color: fillColor}]}>
                {statusText}
              </Text>
            </Svg>
          </View>
        </Card.Body>
        <Card.Footer content={`准载人数: ${maxPayload}`} extra={'往xxx方向'} />
      </Card>
    </WingBlank>
  );
};

const BusCardStyle = StyleSheet.create({
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17202A',
  },
  SVGText: {
    marginLeft: '83%',
    marginTop: '6%',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BusCard;