import React from "react";
import dva from "dva";
import {createLogger}  from "redux-logger";

//路由文件
import router from "./router.js";

import wineShowModel from "./models/wineShowModel.js";
import winelistModel from "./models/winelistModel.js";
 
//创建app
const app = dva({
	onAction : createLogger()
});
app.model(wineShowModel);
app.model(winelistModel);

//配置路由
app.router(router);

//上树！挂载！
app.start("#app");