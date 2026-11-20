import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = ({ user }) => {
    const [email, setEmail] = React.useState(user?.email || '');
    const [password, setPassword] = React.useState(user?.password || '');
    const navigate = useNavigate();
    const handleLogin = () => {
        if (email=="" || password=="") {
            alert("Please fill all the fields");
            return;
        }else{
            if(user.email !== email || user.password !== password){
                alert("Invalid email or password");
                navigate('/dashboard');
                return;
            }else{
                alert("Login successful");
                navigate('/dashboard');
            }
            }
        }
        console.log({ email, password });
    };
  return (
    <div>
      <h1>Login</h1>
      <input 
        placeholder='Enter your Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type='password' 
        placeholder='Enter your Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )


export default Login
