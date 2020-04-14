import {RouteComponentProps} from 'react-router-native';

interface IUserInfo {
  username: string;
  email: string;
  gender?: '男' | '女';
  avatar: string;
  address: string;
  birth: string;
  phone: string;
}

interface INavProps extends RouteComponentProps {
  modifyInfo: any;
  getInfo: any;
  userInfo: IUserInfo;
}
