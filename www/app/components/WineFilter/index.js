import React, { Component } from 'react';
import { connect } from 'dva';
import { push } from 'react-router-redux';

import WineFilter from './WineFilter.js';
import WineTable from './WineTable.js';
import Imageshow from '../Imageshow';

import App from "../../containers/App.js";

class WineListAll extends Component {
	constructor() {
		super();

		this.state = {
			showPicShow: false
		}
	}

	changeShowPicshow(showPicShow) {
		this.setState({
			showPicShow
		})
	}

	render() {
		var pathname = this.props.routing.location.pathname.match(/\/(.+)/)[1];
		return (
			<App>
				<div>
					<WineFilter></WineFilter>
					<WineTable changeShowPicshow={this.changeShowPicshow.bind(this)}></WineTable>
					{
						this.state.showPicShow
							?
							<div className="picshowwrapper">
								<div className="inner_wrapper">
									{/* <a
									className="closeBtn"
									href="javascript:;"
									onClick={() => { this.changeShowPicshow(false) }}
								>×</a> */}
									<Imageshow changeShowPicshow={this.changeShowPicshow.bind(this)}></Imageshow>
								</div>
							</div>
							:
							null
					}
				</div>
			</App>
		)
	}
}

export default connect(
    ({routing}) => ({
        routing
    })
)(WineListAll);