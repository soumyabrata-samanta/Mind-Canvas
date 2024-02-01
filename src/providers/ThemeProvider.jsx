"use client";
import React,{ useContext, useState,useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({ children }) => {
    const { theme }=useContext(ThemeContext);
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
      setMounted(true);
    },[]);
  if(mounted){
  return <div className={theme}>{children}</div>;
  }
  return null;
};
export default ThemeProvider;
