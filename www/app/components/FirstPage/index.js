import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import { push } from 'react-router-redux';
import App from "../../containers/App.js";
import './FirstPage.less';

class FirstPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var tb1 = echarts.init(this.refs.tb1);

        tb1.setOption({
            title: {
                text: '近半年酒品销售量（单位：万瓶）'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: []
            }]
        });

        // 使用刚指定的配置项和数据显示图表。
        $.get('/tb1', function (data) {
            // 填入数据
            tb1.setOption({
                xAxis: {
                    data: data.categories
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '销量',
                    data: data.data
                }]
            });
        });
    }
    
    render() {
  
        return (
            <App>
                <div className="firstpage">
                    <Row>
                        <Col span={18} offset={7}>
                            <Row>
                                <Col span={11}>
                                    <div ref="tb1" style={{ "width": "100%", "height": "300px" }}></div>
                                </Col>

                            </Row>

                        </Col>
                    </Row>
                </div>
            </App>
        )
    }
}
export default connect(
    ({routing}) => ({
        routing
    })
)(FirstPage);