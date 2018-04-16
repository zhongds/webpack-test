import request from 'utils/request';

export default {

  namespace: 'EducationOnlineModel',

  state: {
    isLogin: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * init({ payload: { dispatchUrl, requestPayload = {}, dictTypes = [] } }, { call, put, all }) {
      // 无需请求字典数据的特殊情况
      if (dictTypes.length === 0) {
        // this.dataConfigWithDict = dataCfg;
      }
      console.log({ ...requestPayload })
      const results = yield all([
        call(request, `${dispatchUrl}/find`, { body: { ...requestPayload } }),
        // call(request, 'api/users ', { body: {} }),
        // yield put({ type: 'CommonModel/getAllOrganization_LS', needCategory: true }),
        // 无需请求数据的情况 不发请求
        // dictTypes.length === 0 ? null : yield put({ type: 'CommonModel/getDictMapByTypes', payload: { dictTypes } }),
      ]);
      console.log('-------', results);
      return {
        pageInfo: results[0].data,
        // organizationInfo: results[1],
        // dictMap: results[2],
      };
    },
    /* eslint-disable func-names */
    findByPage: [function* ({ payload: { dispatchUrl, requestPayload = {} }, needMask = true }, { call }) {
    /* eslint-enable func-names */
      const result = yield call(request, `${dispatchUrl}/find`, { body: { ...requestPayload } }, needMask);
      return result.data;
    }, { type: 'takeLatest' }],
  },

  reducers: {
    setSuccessState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
