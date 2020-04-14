import {GET_USER_INFO, MODIFY_USER_INFO} from '../actionTypes';
import {IUserInfo} from '../../custom';

const defaultUser = {
  username: '拖米',
  email: 'wequart@gmail.com',
  gender: '女',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
  address: 'abc',
  birth: '1997-10-03',
  phone: '15520810252',
} as const;

export default function(state: IUserInfo = defaultUser, action: any) {
  switch (action.type) {
    case GET_USER_INFO:
      return defaultUser;
    case MODIFY_USER_INFO:
      return {};
    default:
      return state;
  }
}
