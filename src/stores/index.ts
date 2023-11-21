import { useState } from "react"
import createStore from "./createStore";
import { subAppParamsModel } from "./subAppParamsModel";
import { headerNavModel } from "./headerNavModel";




const store = createStore(() => ({
  subAppParams:subAppParamsModel(),
  headerNav: headerNavModel()
}))

export const {useModel, StoreProvider, getModel, connectModel } = store