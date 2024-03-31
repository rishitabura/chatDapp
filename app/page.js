"use client"

import React, {useEffect, useState, useContext } from "react";
// import "global.css";

// import { Filter, Friend } from "../Components/index";
import { ChatAppContext } from "../Context/ChatAppContext" 

const ChatApp = () => {

  const {title} = useContext(ChatAppContext);

  return <div>{title}</div>
  // return (
  //   <div>
  //     {title}
  //     {/* <Filter />
  //     <Friend /> */}
  //   </div>
  // );
};

export default ChatApp;
