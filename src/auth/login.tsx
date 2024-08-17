import { useNavigate } from "react-router-dom";
import {useAuth} from "./useAuth";
import "./login.css"
export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login().then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <div className="login-page">
    <div className="login-page-logo">
      <h3>POS System</h3>
      <h1>Tienda</h1>
      <img src="/public/logo.png" alt="" />
    </div>
    <div className="login-container">
      <label>Inicio de sesión</label>
      <label htmlFor="usuario">Usuario</label>
      <input id="usuario" type="text" placeholder="Usuario" />
      <label htmlFor="pass">Contrasena</label>
      <input id="pass" type="password" placeholder="Contraseña" />
      <div className="btn-container">
        <button className="btn-link" onClick={() => navigate("/")}>Olvide mi contrasena</button>
        <button onClick={handleLogin}>Iniciar sesión</button>
        <button className="btn-secondary" onClick={() => navigate("/register")}>Registrarse</button>
      </div>

    </div>
    </div>
  );
};