import './index.css';
import React from 'react';
import ReactDom from 'react-dom'
import {MainRouter} from './router';
import axios from 'axios';
import qs from 'qs';

// 引入全局配置和css配置

import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

// axios发送请求默认带cookie
axios.defaults.withCredentials = true;
// 防止产生options请求
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.method === 'post') {
        config.data = qs.stringify({
            ...config.data
        })
    }
    return config;
});

ReactDom.render(
    <LocaleProvider locale={zh_CN}>
        <MainRouter/>
    </LocaleProvider>,
    document.getElementById('root')
);
