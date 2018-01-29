import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import { connect } from "dva";
import { push } from 'react-router-redux';

import "./logo.less";
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    gotopage(keyname, url) {
        this.props.dispatch(push(url));
    }

    render() {
        this.props.routing.location.pathname
        if (/\/.+?$/.test()) {
            var pathname = this.props.routing.location.pathname.match(/\/(.+?$)/)[1];
        } else {
            var pathname = "index"
        }

        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" >
                            WINEPICKER
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectedKeys={['pathname']}
                            style={{ lineHeight: '64px' }}
                            onClick={({ item, key, keypath }) => {
                                this.gotopage(key, item.props.url);
                            }}
                        >
                            <Menu.Item key="firstpage" url="/index">首页</Menu.Item>
                            <Menu.Item key="winefilter" url="/winefilter">酒瓶筛选</Menu.Item>
                            <Menu.Item key="wineseries" url="/wineseries">系列酒品</Menu.Item>
                            <Menu.Item key="personset" url="/personset">个人设置</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>

                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                               {/* 用一种'反包'的方式获得子组件 */}
                                {this.props.children}

                            </Content>
                        </Layout>

                    </Layout>
                    <Layout>
                        <Footer style={{ textAlign: 'center', fontSize: '16px' }}>
                            WINEPICKER酒瓶设计归纳辅助系统 - 版权所有 &copy;2018 技术支持 bjtuwanghui@126.com
                    </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}


// routing是dva内置的一个reducer。包含state等数据
export default connect(
    ({ routing }) => ({
        routing
    })
)(App); 