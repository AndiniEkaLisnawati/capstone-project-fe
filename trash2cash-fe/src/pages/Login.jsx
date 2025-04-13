import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { HiMail } from 'react-icons/hi';
import { TextInput } from 'flowbite-react';

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: formData.email,
        password: formData.password,
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });
      
      console.log("Login response:", response.data);
      
      alert('Login berhasil!');
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate('/');
      }, 100);
    } catch (error) {
      console.error('Login gagal:', error.response?.data || error.message);
      alert('Login gagal: ' + (error.response?.data?.message || 'Terjadi kesalahan'));
    }
  };

  return (
    <section className=" md:h-screen lg:py-0 dark:bg-gray-900" style={{backgroundImage:"url('/src/assets/images/BackgroundLR.png')"}}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white/80 backdrop-blur-md rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-4 p-6 md:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4" onSubmit={handleLogin}>
             <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <TextInput
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                icon={HiMail}
                placeholder="name@company.com"
                rightIcon={HiMail}
                required
              />
           </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#00C81E] focus:border-[#00C81E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#00C81E] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#00C81E] hover:bg-[#009F18] font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign in
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link to="/register" className="font-medium text-[#00C81E] hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
