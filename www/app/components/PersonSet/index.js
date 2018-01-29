import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Input, Button } from 'antd';
import { push } from 'react-router-redux';
import './PersonSet.less';
import App from "../../containers/App.js";
class PersonSet extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        var pathname = this.props.routing.location.pathname.match(/\/(.+)/)[1];
        return (
            <App>
                <div className="personset">
                    <div className="box">
                        <Row >个人信息修改&gt;&gt;</Row>
                    </div>
                    <Col span={12}>
                        <Row>
                            <Col span={6}>
                                姓名：
						</Col>
                            <Col span={10}>
                                <Input placeholder="" id="nameTxt" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                手机号码：
									</Col>
                            <Col span={10}>
                                <Input placeholder="" id="mobileTxt" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                年龄：
						</Col>
                            <Col span={10}>
                                <Input placeholder="" id="ageTxt" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                工作岗位：
						</Col>
                            <Col span={10}>
                                <Input placeholder="" id="jobTxt" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Button type="primary" >提交</Button>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </App>
        )
    }
}

export default connect(
    ({routing}) => ({
        routing
    })
)(PersonSet);