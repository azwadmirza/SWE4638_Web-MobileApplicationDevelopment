import IconComponent from "./components/icon";
import { addCircleOutline } from "ionicons/icons";
import Logout from "./components/logout";
import Link from "next/link";

const AuthenticationLayout = ({children}) => {
    return (
        <div>
            <nav style={{
                position: "fixed",
                top: "0%",
                right: "0%",
                backgroundColor:"black",
                width:"100%"
            }}>
                <Logout/>
                <Link href={'/auth/create'}>
                <button
                    className={`my-4 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-2xl me-4 flex float-end`}
                >
                    <IconComponent icon={addCircleOutline} />
                    Create New Quiz
                </button>
                </Link>
                
            </nav>
            <div className="mt-24 w-full overflow-visible">
                {children}
            </div>
        </div>
    );
}

export default AuthenticationLayout;