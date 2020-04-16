import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {connect} from 'react-redux';
import {getInfo, modifyInfo} from '../redux/actions/usrInfoAcrion';
import {Icon, Provider, TabBar, Toast} from '@ant-design/react-native';
import User from '../Views/User/User';
import Traffic from '../Views/Traffic/Traffic';
import Stats from '../Views/Stats/Stats';
import {IUserInfo} from '../custom';
import AsyncStorage from '@react-native-community/async-storage';

class Nav extends React.PureComponent<
  RouteComponentProps,
  {selectedTab: string}
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      selectedTab: '路况',
    };
  }
  componentDidMount(): void {
    AsyncStorage.getItem('@user_id').then(res => {
      if (res === null) {
        Toast.fail('您还未登录, 正在为您跳转至登录界面', 1);
        setTimeout(() => {
          this.props.history.push('/login');
        }, 1500);
      }
    });
  }

  render(): React.ReactNode {
    return (
      <Provider>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#f5f5f5">
          <TabBar.Item
            title="路况"
            icon={<Icon name="car" />}
            selected={this.state.selectedTab === '路况'}
            onPress={() => this.setState({selectedTab: '路况'})}>
            <Traffic {...this.props} />
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="area-chart" />}
            title="统计"
            selected={this.state.selectedTab === '统计'}
            onPress={() => this.setState({selectedTab: '统计'})}>
            <Stats {...this.props} />
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="user" />}
            badge={3}
            title="用户"
            selected={this.state.selectedTab === '用户'}
            onPress={() => this.setState({selectedTab: '用户'})}>
            <User {...this.props} />
          </TabBar.Item>
        </TabBar>
      </Provider>
    );
  }
}

const mapStateToProps: (state: IUserInfo) => any = state => ({
  userInfo: state,
});
const mapDispatchToProps = {
  modifyInfo,
  getInfo,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
