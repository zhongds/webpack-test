import dvaDynamic from 'dva/dynamic';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';

// 1. Initialize全局错误处理
export const app = dva({
  history: createHistory(),
  onError(e) {
    console.log(e.message);
  },
});

export default function dynamic(params) {
  // 如果传的参数是function ( () => import('...') 这种形式 )
  if (typeof params === 'function') {
    return dvaDynamic({
      app,
      models: [],
      component: params,
    });
  // 如果参数是个配置对象
  } else if (typeof params === 'object' && params !== null) {
    const { models = [], hoc, hocPayload } = params;
    let { component } = params;
    if (typeof hoc === 'function') {
      const originComponent = component;
      component = async () => {
        const [HOC, WrappedComponent] = await Promise.all([hoc(), originComponent()]);
        return HOC(WrappedComponent, hocPayload);
      };
    }
    return dvaDynamic({
      app,
      models,
      component,
    });
  }

  console.log('dynamic 参数类型错误 -----------------');
  return null;
}
