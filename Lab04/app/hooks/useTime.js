"use client";

import { useState } from "react";

export const useTime = () => {
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);

    return {hours,setHours,minutes,setMinutes,seconds,setSeconds};

}