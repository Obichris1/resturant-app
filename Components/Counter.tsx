'use client'

import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-02-02"); 

const Counter = () => {
  
  return <Countdown date={endingDate} className="font-bold text-5xl text-yellow-500"  />;
};

export default Counter;
