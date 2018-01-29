import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'dva';

import "./WineTable.less";


class WineTable extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var self = this;
		const columns = [{
			title: '图片',
			dataIndex: 'id',
			key: 'images',
			render: function (text, record) {

				return <img
					className="showmouse"
					src={`/wineimages_small/${text}.jpg`}

					onClick={
						() => {
							self.props.dispatch({ "type": "wineshow/init_async", "id": record.id })
							self.props.changeShowPicshow(true)


						}
					}
				/>

			}
		}, {
			title: 'id',
			dataIndex: 'id',
			key: 'listid',

		}, {
			title: ' 设计类型',
			dataIndex: 'type',
			key: 'type',

		}, {
			title: '目标酒品',
			dataIndex: 'target',
			key: 'target',

		}, {
			title: ' 产品材质',
			dataIndex: 'material',
			key: 'material',

		}, {
			title: ' 主要颜色',
			dataIndex: 'color',
			key: 'color',

		}, {
			title: '瓶身高度',
			dataIndex: 'height',
			key: 'height',

		}, {
			title: '瓶底类型',
			dataIndex: 'base',
			key: 'base',

		}, {
			title: '瓶身形态',
			dataIndex: 'body',
			key: 'body',

		}, {
			title: '适用人群',
			dataIndex: 'people',
			key: 'people',

		}, {
			title: '设计语义',
			dataIndex: 'semantics',
			key: 'semantics',

		}];
		return (
			<div className="winetable">
				<b>共{"  "}<span className="numberset">{this.props.total}</span>{"  "}种酒瓶符合筛选要求，
				每页显示<span className="numberset"> 5 </span>条，
				所以共{" "}<span className="numberset">{Math.ceil(this.props.total / this.props.pagesize)}{" "}</span>页,
				当前为第{" "}<span className="numberset">{this.props.page}{" "}</span>页</b>
				<Table
					dataSource={this.props.wines}
					columns={columns}
					rowKey="id"
					pagination={{
						"current": this.props.page,
						"total": this.props.total,
						"pageSize": this.props.pagesize,
					}}
					onChange={(pagination) => {
						this.props.dispatch({ "type": "winelist/changepage", pagination })
					}}

				/>
			</div>
		)
	}
}
export default connect(
	({ winelist: { wines, page, pagesize, total } }) => ({
		wines, page, pagesize, total
	})
)(WineTable);
