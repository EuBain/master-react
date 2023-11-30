// react
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

// 组件库
import App from './App.tsx';
// 工具库
import {  BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store'
import WujieReact from "wujie-react";
import { StoreProvider } from './stores/index';
// 类型导入
// 样式文件
import 'virtual:uno.css';
import './style.scss'

// function fetch(url, options) {
//   return window.fetch(url, { ...options, credentials: "include" });
// }

WujieReact.setupApp({
  name: "ReactMicro",
  url: "http://localhost:8889/master-react/",
  exec: true,
  alive:true,
  // fetch,
});
WujieReact.setupApp({
  name: "ReactMicro2",
  url: "http://localhost:8890/master-react/",
  exec: true,
  alive:true,
  // fetch,
});
WujieReact.preloadApp({
  name:'ReactMicro',
  url:'http://localhost:8889/master-react/',
})
WujieReact.preloadApp({
  name:'ReactMicro2',
  url:'http://localhost:8890/master-react/',
})
// WujieReact.setupApp({
//   name: "tayrsi",
//   url: "https://www.tayrsi.cn/master-react/",
//   exec: true,
//   // alive:true,
//   // fetch,
// });

// console.log(' import.meta.env.MODE: ',  import.meta.env.MODE);
// console.log(' import.meta.env.BASE_URL: ',  import.meta.env.BASE_URL);
console.log(' import.meta.env.PROD: ',  import.meta.env);
console.log(' import.meta.env.DEV: ',  import.meta.env.DEV);
// console.log(' import.meta.env.SSR: ',  import.meta.env.SSR);
// console.log(' import.meta.env: ',  import.meta.env);
console.log(' node_env: ',  process.env.NODE_ENV);

const node = document.getElementById('root');

const root = ReactDOM.createRoot(node!);

export const Context = createContext(root)

root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <BrowserRouter basename='/master-react'>
      <ReduxProvider store={store} >
        <Context.Provider value = {root}>
         <StoreProvider>
          <App />
         </StoreProvider>
        </Context.Provider>
      </ReduxProvider>
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>,
)
