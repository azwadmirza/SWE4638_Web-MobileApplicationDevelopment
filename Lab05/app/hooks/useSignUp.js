import { useRouter } from "next/navigation";
import { useState } from "react";
import { postSignUp } from "../lib/requests";

export const useSignUp=()=>{
    const router=useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading,setLoading]=useState(false);

    const register = async (e) => {
        e.preventDefault();
        if(password!==confirmPassword){
            setError('Passwords do not match');
            return;
        }
        setLoading(true);
        await postSignUp({email,password,username}).then((data) => {
            data.json().then((data) => {
                if(data.err){
                    setError(data.err);
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
    

    return {email,setEmail,password,setPassword,username,setUsername,confirmPassword,setConfirmPassword,error,register,loading};
}