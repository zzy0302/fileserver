import React from 'react';
import { CenterLayout } from "../../component/layout/center-layout";
// eslint-disable-next-line
import {Form, Button, Select, message} from 'antd';
import { serverConfig } from "../../config";
import axios from 'axios';
import cookie from 'react-cookies';
let multer = require('multer');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export class FileIndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            loadDown: false,
            type: 'info'
        };
    }

    GetFile() {
        axios
            .post(`${serverConfig.url}/files/getall` ,{
                user: 1
            },{withCredentials: true})
            .then((res) => {
                if (res.data[0].success) {
                    this.setState({loadDown:true})
                } else {
                    message.error('数据加载失败，请检查网络连接');
                    this.setState({loadDown: true});
                }
            })
    }
    componentDidMount() {
        this.GetFile();
    }

    render() {
        return (
            <CenterLayout span={8}>
                {this.state.loadDown ?
                    (<Form>
                        <Form.Item>
                            <h1 className={'text-align-center font-size-33px'}>
                                你好，{cookie.load('name')}同学
                            </h1>
                        </Form.Item>
                    </Form>) : null
                }
            </CenterLayout>
        );
    }
}
