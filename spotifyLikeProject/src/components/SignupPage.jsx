import React from 'react'
import '../App.css'

function SignupPage() {
    const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
        <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>
          Sign Up
        </button>
        <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>
          Log In
        </button>
        </div>
      {isLogin ? <>
      <div className='form'>
        <h2>Login Form</h2>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <a href = '#'>Forgot Password?</a>
        <button>Login</button>
        <p>Not a member? <a href = '#'>Sign up</a></p>
      </div>
      </>: <>
      <div className='form'>
        <h2>Signup Form</h2>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button>Sign Up</button>
      </div>
        </>}
    </div>
    </div>
  )
}

export default SignupPage