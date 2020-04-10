import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {connect} from 'react-redux';
import {getInfo, modifyInfo} from '../redux/actions/usrInfoAcrion';
import {Icon, TabBar} from '@ant-design/react-native';
import User from '../Views/User/User';
import Traffic from '../Views/Traffic/Traffic';
import Stats from '../Views/Stats/Stats';

interface INavProps extends RouteComponentProps {
  modifyInfo: any;
  getInfo: any;
  userInfo: IUserInfo;
}
const Nav: React.FC<INavProps> = props => {
  const [selectedTab, setSelectedTab] = useState('路况');
  // console.log('Nav: ', props.userInfo);
  useEffect(() => {
    props.getInfo();
  }, [props]);
  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5">
      <TabBar.Item
        title="路况"
        icon={<Icon name="car" />}
        selected={selectedTab === '路况'}
        onPress={() => setSelectedTab('路况')}>
        <Traffic {...props} />
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="area-chart" />}
        title="统计"
        selected={selectedTab === '统计'}
        onPress={() => setSelectedTab('统计')}>
        <Stats {...props} />
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="user" />}
        badge={3}
        title="用户"
        selected={selectedTab === '用户'}
        onPress={() => setSelectedTab('用户')}>
        <User {...props} />
      </TabBar.Item>
    </TabBar>
  );
};

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
