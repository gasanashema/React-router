import { useState } from 'react'

const Login:React.FC = () => {
    const [loginFormData,setLoginFormData] = useState({email:'',password:''});

    function handleSubmit(e){
        e.preventDefault();
        console.log(loginFormData);
    }
    function handleChange(e){
        const {name,value} = e.targert;
        setLoginFormData(prev=>({...prev,[name]:value}));
    }

  return (
    <div className="flex flex-col items-center px-7">
  <h1 className="text-2xl font-semibold mb-6">Sign in to your account</h1>
  <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
    <input
      name="email"
      onChange={handleChange}
      type="email"
      placeholder="Email address"
      value={loginFormData.email}
      className="border border-gray-300 h-10 px-3 font-inter shadow-sm font-normal focus:outline-none rounded-t-md"
    />
    <input
      name="password"
      onChange={handleChange}
      type="password"
      placeholder="Password"
      value={loginFormData.password}
      className="border border-gray-300 border-t-0 h-10 px-3 font-inter shadow-sm font-normal focus:outline-none rounded-b-md"
    />
    <button
      type="submit"
      className="bg-[#FF8C38] text-white rounded-md h-14 mt-6 font-inter font-medium hover:opacity-90 transition"
    >
      Log in
    </button>
  </form>
</div>

  )
}

export default Login