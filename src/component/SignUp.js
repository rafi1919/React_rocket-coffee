import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import astro2 from './img/astro2.png';

const SignUp = () => {
    useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
    
    return (
        <>
            <section className="showcase login">
                <div className='overlay'>
                <img src ={astro2} />
                    <form className="form" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                        <input type="name" name="name" id="name" placeholder="whats yo name !" />
                        <input type="email" name="email" id="email" placeholder="any emails?"/>
                        <input type="password" name="password" id="password" placeholder="whats the pass" />
                        <button type="submit">Sign Up</button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default SignUp
