import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import astro2 from './img/astro2.png';

const Login = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
  }, []);
    
    return (
        <>
            <section className="showcase login">
                <div className='overlay'>
                <img src ={astro2} />
                    <form className="form" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" >
                        <input type="email" name="email" id="email"placeholder="wats ur email?"/>
                        <input type="password" name="password" id="password" placeholder="gimme pass" />
                        <button type="submit">Log In</button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login
