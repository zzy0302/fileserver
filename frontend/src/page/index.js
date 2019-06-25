import React from 'react';
import {Form, Input, Avatar, Icon, Button, message} from 'antd';
import {CenterLayout} from "../component/layout/center-layout";
import avatarImg from '../img/luotianyi.png';
import axios from 'axios';
import {serverConfig} from "../config";

export class IndexPage extends React.Component {
    secretKey = 'qaq';
    constructor(props) {
        super(props);
        this.state = {
            uuid: '',
            password: ''
        };
    }
    encode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    }

    submit() {
        const crypto = require('crypto');
        let sign = crypto.createHmac('sha256', this.secretKey).update(this.state.password + 'papa').digest('base64');
        axios
            .post(`${serverConfig.url}/login`, {
                uuid: this.state.uuid,
                user: this.state.uuid,
                password: sign
            })
            .then((res) => {
                if (res.data.success) {
                    message.success('登录成功，即将为您跳转');
                    setTimeout(() => {
                        if (res.data.admin) {
                            this.props.history.push('/admin');
                        } else if (res.data.dean) {
                            this.props.history.push('/dean');
                        } else if (res.data.teacher) {
                            this.props.history.push('/teacher');
                        } else {
                            this.props.history.push('/student');
                        }
                    }, 1000);
                } else {
                    message.error('用户名或密码错误');
                }
            });
    }

    componentDidMount() {

    }

    render() {
        return (
            <CenterLayout span={8}>
                <Form>
                    <Form.Item>
                        <h1 className={'text-align-center font-size-35px'}>
                            欢迎来到在线文件系统
                        </h1>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'学号'} prefix={<Icon type={'user'}/>} value={this.state.uuid}
                               onChange={(e) => {
                                   this.setState({uuid: e.target.value});
                               }}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'密码'} prefix={<Icon type={'key'}/>}
                               value={this.state.password} type={'password'}
                               onChange={(e) => {
                                   this.setState({password: e.target.value});
                               }}
                               onPressEnter={() => {
                                   this.submit()
                               }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className={'width-100'} type={'primary'} onClick={() => {
                            this.submit();
                        }}>登录</Button>
                    </Form.Item>
                </Form>
                <div className={'affixBottom'}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Avatar src={avatarImg} size={'large'}/>
                    <span className={'color-grey text-size-20px padding-left-10px'}>
                        Powered By PAPA.zzy
                    </span>
                </div>
            </CenterLayout>
        );
    }
}
