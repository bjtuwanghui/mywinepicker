import * as R from "ramda";

export default {
  namespace: "wineshow",
  state: {
    "id": "",
    "type": "",
    "target": "",
    "material": "",
    "color": "",
    "height": "",
    "base": "",
    "body": "",
    "people": "",
    "semantics": ""
  },

  reducers: {

    init(state, { result }) {
      var o = R.set(R.lensProp("id"), result[0].id, state);
      o = R.set(R.lensProp("type"), result[0].type, o);
      o = R.set(R.lensProp("target"), result[0].target, o);
      o = R.set(R.lensProp("material"), result[0].material, o);
      o = R.set(R.lensProp("color"), result[0].color, o);
      o = R.set(R.lensProp("height"), result[0].height, o);
      o = R.set(R.lensProp("base"), result[0].base, o);
      o = R.set(R.lensProp("body"), result[0].body, o);
      o = R.set(R.lensProp("people"), result[0].people, o);
      return o = R.set(R.lensProp("semantics"), result[0].semantics, o);
    },

  },

  effects: {

    *init_async({ id }, { put, select }) {

      var { result } = yield fetch(`/winelike/${id}`).then(data => data.json());

      yield put({ "type": "init", result });
      // yield alert(JSON.stringify(result));
    },

    *gonext_async({ id }, { put, select }) {
      if (id >= 1100) {
        id = 1000;
      }
      var { result } = yield fetch(`/winelike/${id + 1}`).then(data => data.json());
      yield put({ "type": "init", result });

    },

    *goprev_async({ id }, { put, select }) {
      if (id <=1001) {
        id = 1101;
      }
      var { result } = yield fetch(`/winelike/${id - 1}`).then(data => data.json());
      yield put({ "type": "init", result });

    },

  },
}