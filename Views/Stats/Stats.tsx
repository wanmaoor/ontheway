import {WebView} from 'react-native-webview';
import React from 'react';
import {RouteComponentProps} from 'react-router-native';

interface IStatsState {
  isLoading: boolean;
  webview: {html: string};
}
class Stats extends React.Component<RouteComponentProps, IStatsState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      isLoading: true,
      webview: {
        html: '<h1>加载中</h1>',
      },
    };
  }
  componentDidMount(): void {
    fetch(
      'http://123.57.55.107:5000/vision?request_way=3&start_time=2020-04-06 00:00:00&end_time=2020-04-11 00:00:00',
      {method: 'GET'},
    )
      .then(res => res.json())
      .then(obj => {
        console.log('阶段一: ', obj);
        delete obj.status;
        return obj;
      })
      .then(res => {
        console.log('阶段二渲染对象:', res);
        this.setState({webview: res});
      });
  }

  render() {
    return <WebView originWhitelist={['*']} source={this.state.webview} />;
  }
}

export default Stats;
