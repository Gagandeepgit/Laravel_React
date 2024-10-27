import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate('/add');
    }
  }, []);

  const login = async() => {
    const item = {email, password}
    // console.warn(item);
    const result = await fetch("http://127.0.0.1:8001/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    const login_result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(login_result));
    navigate('/add');
  }

  return (
    <div>
      <Header/>
        <h1>Login Page</h1>
        <div className='col-sm-6 offset-sm-3'>
          <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
          <br/>
          <input type='password' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control'/>
          <br/>
          <button onClick={login} className='btn btn-primary'>Login</button>
        </div>
        
    </div>
  )
}

export default Login;