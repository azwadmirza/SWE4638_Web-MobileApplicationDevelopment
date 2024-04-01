"use client";

import { useEffect } from "react";

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log("Error component mounted");
        console.log("Error: ",error )
        return ()=>{
            console.log("Error component unmounted");
        }
    },[error])
    return (  
        <div>
            <h2>Something went wrong fetching visions segment!</h2>
            <button
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
 