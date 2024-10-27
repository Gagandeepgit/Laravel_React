import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

const Register = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate('/add');
    }
  }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async() => {
    const item = {name, email, password};
    console.warn(item);

    const result = await fetch("http://127.0.0.1:8001/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    const user_result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(user_result));
    navigate("/add");

  }

  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
        <h1>Register</h1>
        <input type = "text" value= {name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='name'/>
        <br/>
        <input type = "email" value= {email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='email'/>
        <br/>
        <input type = "password" value= {password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='password'/>
        <br/>
        <button onClick={signUp} className='btn btn-primary'>sign Up</button>
    </div>
    </>
    
  )
}

export default Register;