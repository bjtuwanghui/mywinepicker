import React, { Component } from 'react';
import { connect } from 'dva';
import './WineSeries.less';
import { Row, Col } from 'antd';
import { push } from 'react-router-redux';
import App from "../../containers/App.js";
class WineSeries extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        var pathname = this.props.routing.location.pathname.match(/\/(.+)/)[1];
        return (
            <App>
                <div className="wineseries">
                    <div className="box">
                        <p className="bigfont">张小晕的故事&gt;&gt;</p>
                        <Row >
                            <Col span={6}> <img className="wine" src="/wineseriesimages/12.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/11.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/10.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/9.jpg" /> </Col>
                        </Row>

                    </div>

                    <div className="box">
                        <p className="bigfont">老白汾酒&gt;&gt;</p>
                        <Row >
                            <Col span={6}> <img className="wine" src="/wineseriesimages/8.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/7.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/6.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/5.jpg" /> </Col>
                        </Row>

                    </div>

                    <div className="box">
                        <p className="bigfont">怎么能一漾&gt;&gt;</p>
                        <Row >
                            <Col span={6}> <img className="wine" src="/wineseriesimages/4.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/3.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/2.jpg" /> </Col>
                            <Col span={6}> <img className="wine" src="/wineseriesimages/1.jpg" /> </Col>
                        </Row>

                    </div>
                </div>
            </App>

        )
    }

}
export default connect(
    ({routing}) => ({
        routing
    })
)(WineSeries);