import {RouteComponentProps} from 'react-router-native';

interface IUserInfo {
  username: string;
  email: string;
  gender: boolean;
  avatar: string;
  address: string;
  birth: string;
  phone: number;
}

interface INavProps extends RouteComponentProps {
  modifyInfo: any;
  getInfo: any;
  userInfo: IUserInfo;
}
