import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "../Utils/apiFeature";


export const ChatAppContext = React.createContext({});

export const ChatAppProvider = ({ children }) => {

  const title  = "Hey Welcome to blockchain chat appjbv";


  return(
    <ChatAppContext.Provider value={{ title }}>
      {children}
    </ChatAppContext.Provider>
  );

};
