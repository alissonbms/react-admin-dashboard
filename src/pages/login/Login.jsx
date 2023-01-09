//Styles
import "./login.scss";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginInputsWrapper">
        <h1>Hello admin</h1>
        <h3>Ready to see what is going on?</h3>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
      <div className="loginBackgroundWrapper">
        <img alt="data" src="../../../data.svg" />
      </div>
    </div>
  );
};

export default Login;
