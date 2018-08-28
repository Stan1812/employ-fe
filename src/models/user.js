import { routerRedux } from 'dva/router';

export default {
  namespace: 'user',
  state: {
    login: false,
  },
  reducers: {
    setText(state) {
      return {
        ...state,
        text: 'setted dva',
      };
    },
    signin(state) {
      return {
        ...state,
        login: true,
      };
    },
  },
  effects: {
    *login(action, { call, put }) {
      yield put({
        type: 'signin',
      });
      yield put(routerRedux.push('/home'));
    },
    *throwError() {
      throw new Error('hi error');
    },
  },
};
