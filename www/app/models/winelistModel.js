import * as R from 'ramda';

export default {
	namespace: 'winelist',
	state: {
		filter: {},
		wines: [],
		page: 1,
		pagesize: 5,
		total: 0
	},
	reducers: {
		//增加或者更改的过滤器逻辑！
		addorchangefilter_sync(state, { name, value }) {
			return R.set(R.lensProp("filter"), R.set(R.lensProp(name), value, state.filter), state);

		},
		//去除选择的过滤器逻辑！
		delfilter_sync(state, { names }) {
			return R.set(R.lensProp("filter"), R.omit(names, state.filter), state);
		},
		//更换酒瓶  使用Ramda！
		changewines_sync(state, { results, total, page = state.page, pagesize = state.pagesize }) {
			var o = R.set(R.lensProp("wines"), results, state);
			o = R.set(R.lensProp("total"), total, o);
			o = R.set(R.lensProp("pagesize"), pagesize, o);
			o = R.set(R.lensProp("page"), page, o);
			return o;
		},

		// 更改页面
		changepage_sync(state, { page }) {
			return R.set(R.lensProp("page"), page, state);
		}

	},

	effects: {
		*addorchangefilter({ name, value }, { put, select }) {
			yield put({ "type": "addorchangefilter_sync", name, value });

			const filter = yield select(({ winelist }) => winelist.filter);
			const page = 1;
			const pagesize = yield select(({ winelist }) => winelist.pagesize);

			yield put({ "type": "changepage_sync", page });

			const { results, total } = yield fetch(`/wines?page=${page}&pagesize=${pagesize}`, {
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"body": JSON.stringify(filter)
			}).then(data => data.json());

			yield put({ "type": "changewines_sync", results, total })
		},
		//删除过滤器
		*delfilter({ names }, { put, select }) {

			yield put({ "type": "delfilter_sync", names });

			const page = 1;
			const pagesize = yield select(({ winelist }) => winelist.pagesize);
			const filter = yield select(({ winelist }) => winelist.filter);

			yield put({ "type": "changepage_sync", page });

			const { results, total } = yield fetch(`/wines?page=${page}&pagesize=${pagesize}`, {
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"body": JSON.stringify(filter)
			}).then(data => data.json());

			yield put({ "type": "changewines_sync", results, total })

		},

		*changepage({ pagination }, { put, select }) {
			const filter = yield select(({ winelist }) => winelist.filter);
			const pagesize = pagination.pageSize;
			var oldPage = yield select(({ winelist }) => winelist.page);

			if (oldPage = pagination.current) {
				var page = oldPage;
			} else {
				var page = pagination.current;
			}

			yield put({ "type": "changepage_sync", page });

			const { results, total } = yield fetch(`/wines?page=${page}&pagesize=${pagesize}`, {
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"body": JSON.stringify(filter)
			}).then(data => data.json());


			yield put({ "type": "changewines_sync", results, total })

		}
	}

}