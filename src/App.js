import React from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

// import Home from './components/Home'
// import Test from './components/Test'
// import Settings from './components/Settings'

import {Button} from 'antd';
import {Aside, Crumbs} from 'aa';
console.log(Aside);
console.log(Crumbs);

console.log(Button)

import dynamic from 'utils/dynamic'

import './App.scss'

const url = 'http://localhost:3000/warning/';
const data = [
    {
      menu: '预警处置',
      icon: 'police',
      baseUrl: `${url}/`,
      subMenu: [
        {
          url: 'dynamic',
          text: '动态预警',
        },
        {
          url: 'static',
          text: '静态预警',
        },
        {
          url: 'advanced',
          text: '高级预警',
        },
      ],
    },
    {
      menu: '报警处置',
      icon: 'caution',
      baseUrl: `${url}/`,
      subMenu: [
        {
          url: 'alarm',
          text: '报 警 处 置',
        },
      ],
    },
]

function App() {
  return (
    <div className="app" >
      <div className="header" >
        <div className="navigation" >
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/test">测试</NavLink>
          <NavLink to="/settings">设置</NavLink>
        </div>
      </div>
      <div className="content" >
      <Aside data={data} />
        <Switch>
          <Route path="/home" component={dynamic(() => import('components/Home'))}/>
          <Route path="/test" component={dynamic(() => import('components/Test'))}/>
          <Route path="/settings" component={dynamic(() => import('components/Settings'))}/>
          <Redirect path="/" to="/home" />
        </Switch>
      </div>
      <div className="footer" >footer</div>
    </div>
  ) 
}

export default App;