import dynamic from 'utils/dynamic';

const routes = [
  {
    path: '/home',
    component: dynamic({
      models: () => [import(/* webpackChunkName: "HomeModel" */'models/HomeModel')],
      component: () => import(/* webpackChunkName: "Home" */'routes/Home'),
    }),
  },
  {
    path: '/announcement',
    component: dynamic({
      component: () => import(/* webpackChunkName: "Announcement" */'routes/Announcement'),
    }),
  },
  {
    path: '/information',
    component: dynamic({
      component: () => import(/* webpackChunkName: "Information" */'routes/Information'),
    }),
  },
  {
    path: '/transaction',
    component: dynamic({
      component: () => import(/* webpackChunkName: "Transaction" */'routes/Transaction'),
    }),
  },
  {
    path: '/warning-and-education',
    component: dynamic({
      component: () => import(/* webpackChunkName: "WarningAndEducation" */'routes/WarningAndEducation'),
    }),
  },
  {
    path: '/data-mgmt',
    component: dynamic({
      component: () => import(/* webpackChunkName: "DataMGMT" */'routes/DataMGMT'),
    }),
  },
];

export default routes;
