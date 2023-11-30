import { useState } from "react"


export const navListModel = () => {
  const [navList, setNavList] = useState<object[]|[]>([])

  // const navList = new Set([])
  const addNavList = ( params: any) => {
    // console.log(params)
    setNavList((list: object[]) => {
      // const newList = [...list,params]
      // list.find((item) => item.subApp === params.subApp)
      const newList =Array.from(new Set([...list,params]))
      return newList
    })
    // navList.add(params)
    // console.log(Array.from(navList))
  }
  return {navList, addNavList}
}