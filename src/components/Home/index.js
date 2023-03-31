import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Jlogo from '../../assets/images/jlogo.jpg'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['','J','u', 'a', 'n']
    // const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    const word = "Web Developer".split("")
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
     <div className="container home-page" >
         <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass}`} _12>i,</span>
            <br /> 
            <span className={`${letterClass}`} _13>I</span>
            <span className={`${letterClass}`} _14>'m</span>
            {/* <img src={Jlogo} alt="JavaScript Developer Name, Web Developer Name" /> */}
            <AnimatedLetters  letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br />
            <AnimatedLetters  letterClass={letterClass} strArray={word} idx={22}/>
            </h1>
            <h2> Full Stack Web Developer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
         </div>   
            <Logo />
      </div>
      <Loader type="pacman" />
      </>
    )
};

export default Home;