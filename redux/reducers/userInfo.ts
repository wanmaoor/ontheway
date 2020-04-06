import {GET_USER_INFO, MODIFY_USER_INFO} from '../actionTypes';

const defaultUser = {
  username: '拖米',
  email: 'wequart@gmail.com',
  gender: true,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
  address: 'abc',
  birth: '1997-10-03',
  phone: 15520810252,
};

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
