import request from 'utils/request';

const test = payload => request('api/users ', { body: payload });
export default test;
