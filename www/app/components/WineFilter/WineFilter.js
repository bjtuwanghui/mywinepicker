import React, { Component } from 'react';
import { Tabs, Slider, Row, Col, Menu, Dropdown, Button, Icon, message, Checkbox, Radio, DatePicker, Tag, Input, Tooltip } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
import { connect } from 'dva';
import classnames from 'classnames';
import "./WineFilter.less";
import WineFilterBoard from './WineFilterBoard.js';

class WineFilter extends Component {
    constructor(props) {
        super();
        props.dispatch({ "type": "winelist/addorchangefilter" });
    }

    render() {
        return (
            <div className="listall">
                <div className="row">
                    <Row>
                        <Col span={2} className='keywordone'>
                            酒类筛选条件&gt;&gt;
                      </Col>
                   
                    </Row>
                </div>

                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            设计类型：
                      </Col>
                        <Col span={22} >
                            <CheckboxGroup options={[
                                { label: '中式古典', value: '中式古典' },
                                { label: '现代样式', value: '现代样式' }

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["type"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "type", value })
                                    }
                                }}
                                value={this.props.filter.type}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>

                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            目标酒品：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '白酒', value: '白酒' },
                                { label: '洋酒', value: '洋酒' },

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["target"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "target", value })
                                    }

                                }}
                                value={this.props.filter.target}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>

                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            产品材质：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '陶瓷', value: '陶瓷' },
                                { label: '玻璃', value: '玻璃' },
                                { label: '金属', value: '金属' },
                                { label: '塑料', value: '塑料' }

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["material"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "material", value })
                                    }
                                }}
                                value={this.props.filter.material}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>
                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            主要颜色：
                      </Col>
                        <Col span={22} >
                            <CheckboxGroup options={[
                                { label: '多彩', value: '多彩' },
                                { label: '黑', value: '黑' },
                                { label: '蓝', value: '蓝' },
                                { label: '灰', value: '灰' },
                                { label: '白', value: '白' },
                                { label: '黄', value: '黄' },
                                { label: '透明', value: '透明' },
                                { label: '红', value: '红' },
                                { label: '金', value: '金' },
                                { label: '绿', value: '绿' }
                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["color"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "color", value })
                                    }
                                }}
                                value={this.props.filter.color}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>

                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            瓶身高度：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '低', value: '低' },
                                { label: '中', value: '中' },
                                { label: '高', value: '高' }

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["height"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "height", value })
                                    }
                                }}
                                value={this.props.filter.height}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>
                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            瓶底类型：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '平', value: '平' },
                                { label: '凸', value: '凸' }
                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["base"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "base", value })
                                    }
                                }}
                                value={this.props.filter.base}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>
                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            瓶身形态：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '扁平', value: '扁平' },
                                { label: '方正', value: '方正' },
                                { label: '竖直', value: '竖直' },
                                { label: '圆滑', value: '圆滑' }

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["body"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "body", value })
                                    }
                                }}
                                value={this.props.filter.body}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>
                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            适用人群：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '大众', value: '大众' },
                                { label: '年轻人', value: '年轻人' },
                                { label: '中老年', value: '中老年' }

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["people"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "people", value })
                                    }
                                }}
                                value={this.props.filter.people}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>

                <div className="row">
                    <Row>
                        <Col span={2} className='keyword'>
                            设计语义：
                      </Col>
                        <Col span={22}>
                            <CheckboxGroup options={[
                                { label: '复古', value: '复古' },
                                { label: '时尚', value: '时尚' },
                                { label: '传统', value: '传统' },
                                { label: '创新', value: '创新' },
                                { label: '现代', value: '现代' },

                            ]}
                                onChange={(value) => {
                                    if (value.length == 0) {
                                        this.props.dispatch({ "type": "winelist/delfilter", "names": ["semantics"] })
                                    } else {
                                        this.props.dispatch({ "type": "winelist/addorchangefilter", "name": "semantics", value })
                                    }
                                }}
                                value={this.props.filter.semantics}
                            >
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </div>

                {/* 标签页展示与关闭 */}
                <div className="row tags">
                    <Row>
                        <Col span={24} className='keywordone'>
                            当前条件筛选&gt;&gt;
                        </Col>
                        <Col className='personset' span={24}>
                            {/* 以组件形式形成的面板 */}
                            <WineFilterBoard></WineFilterBoard>

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default connect(
    ({ winelist: { filter } }) => ({
        filter
    })
)(WineFilter);