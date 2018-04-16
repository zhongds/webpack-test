import fetch from './fetch';

/** 开发环境后台接口 */
// const API_DEV = 'http://10.10.6.4:9701/'; // 罗佳ip
// const API_DEV = 'http://10.10.52.116:9701/'; // 东旭
// const API_DEV = 'http://10.10.10.227:9701/'; // 忠宝
// const API_DEV = 'http://10.10.6.130:9701/'; // 上秀/
const API_DEV = 'http://localhost:8000/'; // 平安云

/** 测试环境后台接口 */
const API_TEST = 'http://113.96.197.238:9701/';
/** 生产环境后台接口 */
const API_PROD = 'http://113.96.197.238:9701/';
/** staging环境后台接口 */
const API_STAGING = 'http://10.10.201.1:9701/';

console.log('连接的环境是：', process.env.NODE_ENV);
console.log('连接的API环境是：', process.env.API_ENV);

const API_ROOT = (function getApi(params) {
  let res;
  switch (params) {
    case 'development':
      res = API_DEV || API_TEST;
      break;
    case 'test':
      res = API_TEST || API_DEV;
      break;
    case 'production':
      res = API_PROD || API_TEST;
      break;
    case 'staging':
      res = API_STAGING || API_PROD;
      break;
    default:
      res = API_DEV;
      break;
  }
  return res;
}(process.env.API_ENV));


export { API_ROOT };


export default function request(url, options) {
  return fetch(API_ROOT + url, options);
}

