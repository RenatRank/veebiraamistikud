import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="left">
                <h3 className="loginLogo">SNTK</h3>
                <span className="loginDesc">Saaremaa noorte sotsiaalmeedia leht</span>
            </div>
            <div className="right">
                <div className="loginCont">
                    <input placeholder= "Kasutajanimi" type="text" className="loginInput" />
                    <input placeholder= "Email" type="email" className="loginInput" />
                    <input placeholder="Salasõna" type="password" className="loginInput" />
                    <input placeholder="Salasõna uuesti" type="password" className="loginInput" />
                    <button className="loginBtn">Registreeru</button>
                    <button className="loginBtn">Logi oma kontosse sisse</button>
                    
                </div>

            </div>
        </div>
    </div>
  )
}
