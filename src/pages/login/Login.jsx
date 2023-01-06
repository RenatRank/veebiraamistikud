import "./login.css"
import Main from "../main/main.js"
import "../../App.js"
import { Home } from "@mui/icons-material";
import useState from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const LoginFunc = () =>{
    <BrowserRouter>
    <Routes>
      <Route path="./main/" element={<Main />}/>
      
    </Routes>
  </BrowserRouter>
}

export default function Login() {
    return (
    <div className="login">
        <div className="loginWrapper">
            <div className="left">
                <h3 className="loginLogo">SNTK</h3>
                <span className="loginDesc">Saaremaa noorte sotsiaalmeedia leht</span>
            </div>
            <div className="right">
                <div className="loginCont">
                    <input placeholder= "Email" type="email" className="loginInput" />
                    <input placeholder="Salasõna" type="password" className="loginInput" />
                    <button className="loginBtn" onClick={LoginFunc}>Logi sisse</button>
                    <span className="loginReset">Unustasid parooli?</span>
                    <button className="loginBtn">Registreeri kasutaja</button>
                </div>

            </div>
        </div>
    </div>
  )
}
