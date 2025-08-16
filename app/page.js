'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";


export default function Home() {

  const[isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!'theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <div>
      <Navbar isDarkMode = {isDarkMode} setIsDarkMode = {setIsDarkMode}></Navbar>
      <Header isDarkMode = {isDarkMode}></Header>
      <About isDarkMode = {isDarkMode}></About>
      <Experience isDarkMode = {isDarkMode}></Experience>
      <Education isDarkMode = {isDarkMode}></Education>
      <Work isDarkMode = {isDarkMode}></Work>
      <Certifications isDarkMode = {isDarkMode}></Certifications>
      <Contact isDarkMode = {isDarkMode}></Contact>
      <Footer isDarkMode = {isDarkMode}></Footer>
      
    </div>
  );
}
