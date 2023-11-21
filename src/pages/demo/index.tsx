import React, { useContext, useState } from "react";
import BedServer from "../ErrorPage/BedServer";
import { Context } from "@/main";
// import './index.scss'
import "./index.scss";
const aa = 1 || 3;
const Demo = () => {
  const element = useContext(Context);
  console.log(element);
  const [num, setNum] = useState(2);
  let [array, setArray] = useState<any>([1]);
  // useState批量处理
  const add = () => {
    // setNum(num+1);
    // setNum(num+1);
    // setNum(num+1);
    // array.push(6)
    // setNum( num => num+1);
    // setNum( num => num+1);
    // setNum( num => num+1);
    // setArray(array => [num,...array]
    // .map(index => <div key={index}>index</div>)
    // );
  };

  // &&赋值
  return (
    <div className="demo">
      {/* <div key="1">{num}</div>
      <BedServer></BedServer>
      <button onClick={add}>+</button> */}
      {/* { num && ()=> for(let c =0; c < num; c++) {
        }} */}
      {/* { array.map((index) => (
          <div key={index}>{index}</div>
        ))} */}
      {/* <div className={scss.box1}></div>
        <div className={scss.box2}></div> */}
      {/* <div className='box1'></div>
        <div className='box2'></div> */}
      {/* <div className="border3">
        <div className="content">伪类设置的边框</div>
      </div> */}
      <div style={{display:'flex' ,width:'100%'}}>
        <div style={{flexGrow:1,flexShrink:1,flexBasis :'100px', width:"200px" ,backgroundColor:'red'}}>1</div>
        <div style={{backgroundColor:'green', flex:1}}>2</div>
      </div>
    </div>
  );
};
export default Demo;
