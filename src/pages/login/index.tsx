// import './App.css'
import Img_login from "../../assets/bc_login.png"
import Img_google from "../../assets/google.svg"
function Login() {

    return (
      <>
        <div style={{display: "flex", height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center"}}>
          <div style={{ backgroundColor: "#F5831A",  height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <img src={Img_login} alt="" />
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <h1 style={{color: "#fff"}}>Bem vindo ao MOON</h1>
              <p style={{color: "#fff"}}>Vamos começar a sua jornada financeira até a lua, Prepare seu foguete e coloque o seu capacete :)</p>
            </div>
            <div style={{ backgroundColor: "pink", width: "40%", maxWidth: 300}}>
              <button style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center",  gap: 16}}> <img src={Img_google} alt="" /> Entrar com o Google</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Login
  