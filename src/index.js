import './index.scss';
import createLoading from 'dva-loading';
import { app } from 'utils/dynamic';

// 1. Initialize
// const app = dva();

// 2. Plugins 全局loading
app.use(createLoading());

// 3. Model 可以设置註冊公共Model之类
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
