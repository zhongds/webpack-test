// import test from 'services/loginRequest';

export default {

  namespace: 'HomeModel',

  state: {
    isLogin: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log(2222);
      // const res = yield call(test, payload);
      // console.log(res);
    },
  },

  reducers: {
    setSuccessState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
