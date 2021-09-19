import '../styles/globals.css'
import Navbar from "../components/header/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    AOS.init();
  },[])
  return <Navbar><Component {...pageProps} /></Navbar>
}

export default MyApp
