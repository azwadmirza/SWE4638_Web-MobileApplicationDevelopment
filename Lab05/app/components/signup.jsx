import { useSignUp } from "../hooks/useSignUp";
const SignUp = ({setView}) => {

  const {email,setEmail,password,setPassword,username,setUsername,confirmPassword,setConfirmPassword,error,register,loading}=useSignUp();
  return (
    <div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-white bg-opacity-95 border-none">
      <form className="space-y-6" onSubmit={(e)=>register(e)}>
        <h5 className="text-xl font-medium text-black">Register</h5>
        {error!=='' && <div className="w-full text-white bg-red-800 text-center py-2">{error}</div>}
        <div>
          <label className="block mb-2 text-sm font-medium text-black text-black">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
            placeholder="someone@example.com"
            aria-label="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-black text-black">
            Your username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
            placeholder="username"
            aria-label="username"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            autoComplete="off"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-black text-black">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            autoComplete="off"
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-black text-black">
            Confirm your password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            autoComplete="off"
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-black hover:border-black hover:bg-bitBrown hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register
        </button>
        <div className="text-sm font-medium text-black dark:text-black">
          Already Have an account registered?{" "}
          <button className="text-blue-700 hover:underline dark:text-blue-500" onClick={()=>setView("login")}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
