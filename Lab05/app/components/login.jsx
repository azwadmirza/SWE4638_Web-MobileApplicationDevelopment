import {useLogin} from "../hooks/useLogin";
import Loading from "../loading";

const Login = ({setView}) => {
  const {email,setEmail,password,setPassword,error,login,loading}=useLogin();
  if(loading){
    return Loading();
  }
  return (
    <div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-white bg-opacity-95 border-none">
      <form className="space-y-6" onSubmit={()=>login()}>
        <h5 className="text-xl font-medium text-black">
          Login
        </h5>
        {error!=='' && <div className="w-full text-white bg-red-800 text-center py-2">{error}</div>}
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black text-black"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-black text-black"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-black hover:border-black hover:bg-bitBrown hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-black dark:text-black">
          Not registered?{" "}
          <button className="text-blue-700 hover:underline dark:text-blue-500" onClick={()=>setView("signup")}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
