import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (!passwordConfirm) {
      errors.passwordConfirm = 'Please re-enter your password';
    } else if (password !== passwordConfirm) {
      errors.passwordConfirm = 'Passwords must match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      console.log('Form submitted');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <div>{errors.email}</div>
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <div>{errors.password}</div>
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <div>{errors.passwordConfirm}</div>
      <input type='submit' value='Submit' />
    </form>
  )
}
