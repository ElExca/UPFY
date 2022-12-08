import "./register.css"
import {useState, useContext, useEffect} from "react";
import { UserContext } from "../../context/UserContext";
import {Link} from "react-router-dom";


function Register(){
    const{createUserPost} = useContext(UserContext)

    const[user, setUser] = useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserPost(user);
    }

    return(
        <div className="register">
            <header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="" />
            </header>

            <div className="register-center">
                    <div className="form-register">
                        <div className="form-head">
                            <h3>REGISTRARTE</h3>
                            <h5>Ingresa tus datos para registrarte</h5>
                        </div>
                    
                        <form onSubmit={handleSubmit}>

                        <div className="field input-field">
                            <h5>Correo electrónico</h5>
                            <input type="email" placeholder="Correo electrónico" className="input" name="email" onChange={handleChange} required />
                        </div>

                        <div className="field input-field">
                            <h5>Nombre de Usuario</h5>
                            <input type="text" placeholder="Nombre de Usuario" className="input" name="name" onChange={handleChange} required />
                        </div>

                        <div className="field input-field">
                            <h5>Contraseña</h5>
                            <input type="password" placeholder="Contraseña" className="input" name="password" onChange={handleChange} required />
                        </div>
                        <div className="field input-field">
                            <h5> Confirmar Contraseña</h5>
                            <input type="password" placeholder="Confirmar Contraseña" className="input" />
                        </div>

                        <div className="field button-field">
                            <button>Registrarte</button>
                        </div>

                        </form>

                    <div className="form-link">
                        <span>¿Ya tienes cuenta?
                            <Link to={"/login"} className="link signup-link"> Iniciar Sesion</Link>
                        </span>
                    </div>
                </div>
            </div>
            

            <footer>
                <div className="github"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABJpJREFUaEPtmo1RFTEQx3crUCtQKhAqUCpQKlAqUCoQKxArECoQKhAqECoQKlAqWOfP7L057m2ym1zu5oCXmTd8vFwuv+xm958PpidW+Inx0gb4sVt8Y+GWFhaRV0T0hojw863+xO/9ck1E+Fzq54KZ8fckpbmFFfIdEX1WwJqOA/iYiE5awzcDVtAvRPSxhjDzzCkRfWfm8xbtjgYWkedEBFBYdMoC8IOxFh8FLCLviegHEQF6jvJPoeHuVaUaWES+zWDVFNQxM+/XEFcBiwis2nqulvYfUX2XmWH1cCkGFpFfmmLCL5mwYjF0EfBCLDscvyLoMLCIHGo0ntBg1U2H53QIWESgkuDKVrnR+QwFhagN0dGynBERcjAseURErxON7zOzG71dYM2zvzOqCaJglYO1Pv5Gbh5TTojosJ93RQTtIjtYBcFrywtiEWDPlc2RVeXVjXink+80cqea1HPwL+TxbQ2G6DhA8cy94nga6p4y815ulLPA2uk/jpmQGprIPs8dWvTHA4aFPiwIGJ7w1+nPGTMjlpglCaxzEdb1ZOMeM0PnTl4CLt31AXPZXGLmgKGkoKi8ci9oeZXHfO8ErX7TX5kZsWet5IBhtUiKmdPCCGzIGF65ZuatUmDxWiWi5EgGnq2qUiCATLc2LRycK7fIzV7eq6JyHhIRzM+XTjUzXaaAvdyLd2Wj4RSgXZsiAsX1yXmHGVtSwJF0FJJyU4AHPRCbgZDE90oKGEICu425MpvgGHZCRCLBywxcDxIYAyAiblBl5jW+BwmsoshTXNDsjwY4t1xdzYDWwEsPWjfMPDzlsE8PRSQStGaTlEbQyq2Lu+pFUTqSh5PybYpU1G8zaJAi4MgIog/JVclU0NGApccza6chqSgdyXNgOmfm3angrHZFJCKK8Ki5qMmtlrDV8iwAM5sACQqOrssvLJ3fYnmIgQH02h5UYLDCVRQWO6fehgTavGJmeOlayQFjm+RnsEeARpqaZOdDtTP6EoFFl3HKiAVGHFjl23AZhiUhLIkXW/vDSGdYIzfZ1FNQ7KmVnGNll63eJt4wPWEAdjA31MUQQCxw1AM0PkhfFxFPEREsWDCY8K7uikTk0X4d3BpIDpAHjJej8/3gtZqzmiIAlToNQEdCGwXaFrzHW9h7A5BNlZGNeCsn96ERHACdiujJ+WQoqOjGYQra3XJygXUuW1JzlYNFJNdRMz2kehxZ9iWexRnXtrflFAVOCZFVDtY5DW/A3INbYt7i6MOMlhngiI63Hg/pgRCwWtmyYnOlFdTJQ+DwtAkDK7S1qDhi5gMvkkS/rwDORuXhe4uAFdrSsk2uFGXiRWq8imDRSDFwxtL4Cmmlu0aIxfdt/+w4YuUCCxfDVgNn5vSQyVyT5sCDwNW7LVUW7jqskRlROLWl2xr4CnfDxkjXUcA9cKQjBLSh+Lhk5p2IK/fastIS1BqCo3kiWNJ+E2B1cchQpC7Ad/LQ3EgrcOk7UNysHXvHsntnM+A+hN7BhABBni5aMuo0wcDBO9xbOSXWHRW0Sl+0lPqTWHgpcFY/NsBLtk6Lvm0s3GIUl9zGf69TBltRfaJgAAAAAElFTkSuQmCC"/></div>
            </footer>
        </div>
    );
}

export default Register;