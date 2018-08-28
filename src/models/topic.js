import { routerRedux } from 'dva/router';
import * as API from '../services/api';
export default {
  namespace: 'topic',

  state: {},
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    *getTopics({ payload }, { call, put }) {
      const formData = payload;
      const result = yield call(API.login, formData);
      console.log(result);
      yield put({ type: 'save', payload: result });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },
};
