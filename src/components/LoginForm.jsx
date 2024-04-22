import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";
import Button from "../components/UI/Button"

const LoginForm = () => {
  const { login } = useAuthentication();
  const  navigate  = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      console.log(inputs);
      const userData = await login(inputs);
      console.log(userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  }

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doLogin,
    initValues,
  );
  console.log(inputs);
     return (
         <>
             <h1>Login</h1>
             <form onSubmit={ handleSubmit }>
                  <div>
                      <label htmlFor="loginuser">Username</label>
                     <input
                         name="username"
                         type="text"
                         id="loginuser"
                         onChange={ handleInputChange }
                         autoComplete="username"
                     />
                 </div>
                 <div>
                     <label htmlFor="loginpassword">Password</label>
                      <input
                         name="password"
                         type="password"
                         id="loginpassword"
                         onChange={ handleInputChange }
                         autoComplete="current-password"
                     />
                 </div>
                 <Button type="submit" text="Login">Register</Button>
             </form>
         </>
     );
};

export default LoginForm;
