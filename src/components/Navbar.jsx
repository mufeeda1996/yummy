import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Signup states
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  // Login handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Get stored users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for valid user
    const user = users.find(
      (u) => u.email === email.trim() && u.password === password.trim()
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/'); // redirect home
    } else {
      setError('Invalid email or password');
    }
  };

  // Signup handler
  const handleSignup = () => {
    if (!signupName || !signupEmail || !signupPassword) {
      alert('All fields are required');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check duplicate email
    if (users.find((u) => u.email === signupEmail)) {
      alert('Email already registered');
      return;
    }

    const newUser = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Now you can login.');
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
  };
  
  return (
    <div>
     <nav className="flex justify-between items-center px-4 sm:px-8 py-3 container mx-auto">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600">
            Yummy
          </h1>
        </Link>
        <div className='flex items-center gap-3'>
        {/* <Link to='/admin'> <button className="btn sm:btn-sm md:btn-md bg-white text-orange-600 rounded-full font-semibold shadow hover:shadow-md transition"> Become a partner </button></Link> */}
          <button
            className="btn bg-white text-orange-600 rounded-full font-semibold shadow"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Sign Up / Login
          </button>
          <div className="relative inline-block">
 <Link to='/checkout' ><ShoppingCart className="w-10 h-7 text-orange-600 font-semibold" /></Link>
  
  <small className="absolute -top-2 -right-2 btn btn-xs bg-white text-orange-600 rounded-full font-semibold shadow hover:shadow-md transition">
    {cartItems.length}
  </small>
</div>
</div> 

       
      </nav>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          {/* Close button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('my_modal_3').close()}
          >
            ✕
          </button>

          {/* Login */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Login
            </h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border px-3 py-2 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border px-3 py-2 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>

          {/* Signup */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Sign Up
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border px-3 py-2 rounded-lg"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border px-3 py-2 rounded-lg"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border px-3 py-2 rounded-lg"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border px-3 py-2 rounded-lg"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
              />
              <button
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
    
  )
}

export default Navbar
