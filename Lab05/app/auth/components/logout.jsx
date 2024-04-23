"use client";
import { useRouter } from "next/navigation";
import IconComponent from "./icon";
import { exitOutline } from "ionicons/icons";

const LogOut = () => {
    const router=useRouter();
    const removeTokens=()=>{
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        router.push('/');
    }
    return ( <button
        className={`my-4 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-2xl me-4 flex float-end`}
        onClick={()=>removeTokens()}
    >
        <IconComponent icon={exitOutline} />
        Log Out
    </button> );
}
 
export default LogOut;