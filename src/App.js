import React from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

// import Home from './components/Home'
// import Test from './components/Test'
// import Settings from './components/Settings'

import dynamic from 'utils/dynamic'

import './App.scss'

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