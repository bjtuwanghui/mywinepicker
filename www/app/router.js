import React from "react";
import App from "./containers/App.js";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Route } from 'react-router';
import createHistory from 'history/createHashHistory';
const history = createHistory();

import FirstPage from "./components/FirstPage";
import WineFilter from "./components/WineFilter";
import WineSeries from "./components/WineSeries";
import PersonSet from "./components/PersonSet";

export default () => {
	return <ConnectedRouter history={history}>
		<div>
			<Route exact path="/winefilter" component={WineFilter} state="w" />
			<Route exact path="/wineseries" component={WineSeries} />
			<Route exact path="/personset" component={PersonSet} />

			<Route exact path="/index" component={FirstPage} />

			<Route exact path="/" component={FirstPage} />


		</div>
	</ConnectedRouter>
}