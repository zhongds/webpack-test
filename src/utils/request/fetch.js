import fetch from 'dva/fetch';
import { ACCESS_TOKEN } from 'config/constants';
import { LoadingMask } from 'components';

function parseJSON(response) {
  return response.text().then((text) => {
    if (typeof text === 'string' && text !== '') {
      return JSON.parse(text);
    }
    // 无返回数据时当做成功特殊处理
    return null;
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, extraOption) {

  // check is logined
  let token = sessionStorage.getItem(ACCESS_TOKEN);
  if (!token && url.indexOf('oauth/token') === -1) {
    throw new Error('用户还没登陆');
  } else if (url.indexOf('oauth/token') !== -1) {
    delete sessionStorage[ACCESS_TOKEN];
    token = null;
  }

  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // 已经登陆了
  if (token) {
    const authHeaders = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: getAuthorization(token),
      },
    };
    config = Object.assign({}, config, authHeaders);
  }

  Object.assign(config, options);
  if (config.body && config.headers['Content-Type'] === 'application/json') {
    config.body = JSON.stringify(config.body);
  }

  const mergedExtraOption = {
    // 默认值
    needMask: true,
    // 参数值
    ...extraOption,
  };
  const { needMask } = mergedExtraOption;

  needMask && LoadingMask.show();

  const final = (result) => {
    // 隐藏loading遮盖层
    needMask && LoadingMask.hide();
    return result;
  };

  return fetch(url, config)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }))
    .then(final);
}
