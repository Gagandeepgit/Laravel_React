import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

const Protected = (props) => {
    const navigate = useNavigate();
    const Component = props.Cpm;

    useEffect(() => {
        if(!localStorage.getItem('user-info')){
          navigate('/register');
        }
      }, []);

  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected;