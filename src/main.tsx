// react
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

// 组件库
import App from './App.tsx';
// 工具库
import {  BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store'
// 类型导入
// 样式文件
import 'virtual:uno.css';
import './style.scss'


// console.log(' import.meta.env.MODE: ',  import.meta.env.MODE);
// console.log(' import.meta.env.BASE_URL: ',  import.meta.env.BASE_URL);
// console.log(' import.meta.env.PROD: ',  import.meta.env.PROD);
// console.log(' import.meta.env.DEV: ',  import.meta.env.DEV);
// console.log(' import.meta.env.SSR: ',  import.meta.env.SSR);
// console.log(' import.meta.env: ',  import.meta.env);
// console.log(' process.env: ',  process.env);

const node = document.getElementById('root');

const element = ReactDOM.createRoot(node!);
export const Context = createContext(element)
// console.log(element)
element.render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <BrowserRouter basename='/master-react'>
      <ReduxProvider store={store} >
        <Context.Provider value = {element}>
          <App />
        </Context.Provider>
      </ReduxProvider>
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>,
)
