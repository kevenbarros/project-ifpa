// import './App.css'
import {Link, Outlet } from 'react-router-dom'
import Loading from '../loading'
import Mic from '../../assets/mic.svg'
import Home from '../../assets/home.svg'
import Rockt from '../../assets/rocket_FILL0_wght400_GRAD0_opsz48 1.svg'
import Settings from '../../assets/settings.svg'
import Pie from '../../assets/pie-chart.svg'
import Moon from '../../assets/logo.svg'
import MoonBp from '../../assets/logopb.svg'
import PerfilMock from '../../assets/perfilMock.png'

interface IOptionsSideBar{
  label: string,
  icone: any
}
function SideBar() {
    const options:IOptionsSideBar[] = [
      {
        label: 'home', icone: MoonBp
      },
      {
        label: 'audio', icone: Mic
      },
      {
        label: 'home', icone: Home
      },
      {
        label: 'metas', icone: Rockt
      },
      {
        label: 'configuracao', icone: Settings
      },
      {
        label: 'configuracao', icone: PerfilMock
      },
      // {
      //   label: 'Pie', icone: Pie
      // }
    ]
    return (
      <>
          <div style={{ backgroundColor: "#008F98", display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "60%", display: "flex", alignItems: 'center', justifyContent: 'space-evenly', padding: "10px 0"}}>
              {
                options.map((e)=>{
                  return <Link to={`/app/${e.label}`}><img src={e.icone} style={{cursor: "pointer", maxWidth: 40}} alt="" /></Link>

                })
              }
            </div>
              
          </div>
              <Outlet />
      </>
    )
  }
  
  export default SideBar
  