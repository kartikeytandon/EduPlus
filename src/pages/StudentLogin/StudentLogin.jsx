import React, { useState } from 'react';
import EduLogo from '../../assets/Edu+Logo.png';
import { Link } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section id='landingSection'>
      <div className='w-fit mx-auto pt-16'>
        <img src={EduLogo} alt="" />
        <div id='loginBox' className='px-6 py-4 my-12 mx-4'>
          <h4 className='text-2xl text-center p-2'>Welcome Back, Student!</h4>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <input
                type="email"
                className='outline-none py-3 pl-2 my-2'
                placeholder='Mail Address'
                value={email}
                onChange={handleEmailChange}
                required
              />
              <input
                type="password"
                className='outline-none py-3 pl-2 my-2'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className='flex items-center justify-center gap-4'>
              <button className='text-xl px-5 py-3 my-2'>
                <Link to='/'>
                  <GrLinkPrevious />
                </Link>
              </button>
              <button type="submit" className='text-xl py-2 my-2 w-36'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StudentLogin;