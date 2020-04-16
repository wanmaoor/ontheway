import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {WebView} from 'react-native-webview';

class Stats extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
  }

  render() {
    return <WebView source={{uri: 'https://baidu.com'}} />;
  }
}

export default Stats;
