
import "./login.css"
import {useState, useContext} from "react";
import { UserContext } from "../../context/UserContext";
import {Link} from "react-router-dom";

function Login(){
    const {login, getUser} = useContext(UserContext);

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    }


    return(
        <div className="login">
            <header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="" />
            </header>

            <div className="login-center">
                    <div className="form-login">
                        <div className="form-head">
                            <h3>INICIAR SESIÓN</h3>
                            <h5>Ingresa tus datos para iniciar sesión</h5>
                        </div>

                        <form onSubmit={handleSubmit}>
                        <div className="field input-field">
                            <h5>Nombre de usuario</h5>
                            <input type="text" placeholder="Nombre de usuario"  name="name" className="input" onChange={handleChange} required />
                        </div>

                        <div className="field input-field">
                            <h5>Contraseña</h5>
                            <input type="password" placeholder="Contraseña" className="input" name="password" onChange={handleChange} required />
                        </div>

                        <div className="field button-field">
                            <button>Iniciar Sesión</button>

                        </div>
                        </form>

                    <div className="form-link">
                        <span>¿No tienes una cuenta?
                            <Link to={"/register"} className="link signup-link"> Registrate aquí</Link>
                        </span>
                    </div>
                </div>
            </div>
            

            <footer>
                <div className="github"><img src="data:image/png;base64,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"/></div>
            </footer>
        </div>
    );
}

export default Login;