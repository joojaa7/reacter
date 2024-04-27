import { useUser } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";
import Button from "./ui/Button"

const RegisterForm = () => {
  const { register } = useUser();
  // const  navigate  = useNavigate();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    try {
      console.log(inputs);
      const userData = await register(inputs);
      console.log(userData);
    } catch (e) {
      alert(e.message);
    }
  }

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doRegister,
    initValues,
  );
  console.log(inputs);
     return (
         <>
             <h1>Register</h1>
             <form onSubmit={ handleSubmit }>
                  <div>
                      <label htmlFor="registeruser">Username</label>
                     <input
                         name="username"
                         type="text"
                         id="registeruser"
                         onChange={ handleInputChange }
                     />
                 </div>
                 <div>
                     <label htmlFor="registerpassword">Password</label>
                      <input
                         name="password"
                         type="password"
                         id="registerpassword"
                         onChange={ handleInputChange }
                     />
                 </div>
                                  <div>
                     <label htmlFor="registeremail">Email</label>
                      <input
                         name="email"
                         type="email"
                         id="registeremail"
                         onChange={ handleInputChange }
                     />
                 </div>
                 <Button type="submit" text="Register">Register</Button>
             </form>
         </>
     );
};

export default RegisterForm;
