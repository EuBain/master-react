import { useState } from "react"
import createStore from "./createStore";
import { subAppParamsModel } from "./subAppParamsModel";
import { routePathModel } from "./routePathModel";
import { navListModel } from "./navListModel";




const store = createStore(() => ({
  // subAppParams:subAppParamsModel(),
  routePath: routePathModel(),
  navList: navListModel()
}))

export const {useModel, StoreProvider, getModel, connectModel } = store