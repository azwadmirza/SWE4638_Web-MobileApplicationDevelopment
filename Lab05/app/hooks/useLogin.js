import { useRouter } from "next/navigation";
import { useState } from "react";
import { postLogin } from "../lib/requests";

export const useLogin=()=>{
    const router=useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading,setLoading]=useState(false);

    const login = async () => {
        setLoading(true);
        const rememberMe=true;
        await postLogin({email,password,rememberMe}).then((data) => {
            data.json().then((data) => {
                if(data.err){
                    setError("Invalid Credentials");
                    setLoading(false);
                }
                else{
                    localStorage.setItem('access',data.access);
                    if(data.refresh){
                        localStorage.setItem('refresh',data.refresh);
                    }
                    localStorage.setItem('email',data.email);
                    localStorage.setItem('username',data.username);
                    router.push('/auth');
                }
                setLoading(false);
            })
        });
    }
    

    return {email,setEmail,password,setPassword,error,login,loading};
}