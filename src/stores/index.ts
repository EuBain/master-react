import { useState } from "react"
import createStore from "./createStore";
import { subAppParamsModel } from "./subAppParamsModel";
import { headerNavModel } from "./headerNavModel";
import { navListModel } from "./navListModel";




const store = createStore(() => ({
  subAppParams:subAppParamsModel(),
  headerNav: headerNavModel(),
  navList: navListModel()
}))

export const {useModel, StoreProvider, getModel, connectModel } = store