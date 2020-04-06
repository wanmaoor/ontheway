import {GET_USER_INFO, MODIFY_USER_INFO} from '../actionTypes';

export const modifyInfo = (payload: IUserInfo) => ({
  type: MODIFY_USER_INFO,
  payload,
});
export const getInfo = () => ({type: GET_USER_INFO});
