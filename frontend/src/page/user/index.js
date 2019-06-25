import React from 'react';
import { CenterLayout } from "../../component/layout/center-layout";
import {Form, Button, Select, message} from 'antd';
import { serverConfig } from "../../config";
import axios from 'axios';


export class UserIndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            loadDown: false,
            type: 'info'
        };
    }
    userLogin() {
        axios
            .post(`${serverConfig.url}/create`, {
                user: 1
            })
            .then((res) => {
                if (res.data.success) {
                    if (res.data.illegal) {
                        message.error('身份非法，请重新登录');
                        this.props.history.push('/');
                    }
                    this.setState({loadDown:true})
                } else {
                    message.error('数据加载失败，请检查网络连接');
                    this.setState({
                        loadDown: true
                    });
                }
            })
    }
    componentDidMount() {
        this.userLogin();
    }

    render() {
        return (
            <CenterLayout span={8}>
                {this.state.loadDown ?
                    (<Form>
                        <Form.Item>
                            <h1 className={'text-align-center font-size-33px'}>
                                你好，同学
                            </h1>
                        </Form.Item>
                    </Form>) : null
                }
            </CenterLayout>
        );
    }
}
