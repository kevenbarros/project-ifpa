// import './App.css'
import {Outlet } from 'react-router-dom'
import style from "./index.module.css"
function Loading() {

    return (
      <>
      <div style={{position: "fixed" , height: "100vh", width: "100vw", display:'flex', alignItems: "center", justifyContent: "center"}}>
      <div className={style.mainBoxes}>
        <div className={style.boxes}>
            <div className={style.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={style.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={style.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={style.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </div>
      </div>
      
      </>
    )
  }
  
  export default Loading
  