import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => { 'Hello'
  const [letterClass, setLetterClass] = useState('text-animate')

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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
            //   const word = "About me".split("")
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          As an aspiring entry-level full stack web developer, 
          I am passionate about coding and creating dynamic web applications.
           My love for technology and problem-solving has driven me to pursue a career in web development. 
           I have a solid foundation in HTML, CSS, and JavaScript, and I am 
           constantly learning new technologies to enhance my skills. My goal is to contribute to a 
           team that values collaboration, creativity, and innovation. I am excited 
           to join the web development community and contribute to building user-friendly 
           and efficient web applications.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
          As a family person, my loved ones are my top priority, 
          and I strive to maintain a healthy balance between work and family life. 
          Being a father of two beautiful children has taught me patience, empathy, 
          and the importance of being present in the moment.
           I cherish every opportunity to spend quality time with them and 
           create memories that we will cherish for a lifetime. 
           When I'm not spending time with my family, you can find me indulging 
           in my passion for sports. Whether it's playing or watching, 
           I am a sports fanatic who enjoys the competitive nature of sports 
           and the sense of camaraderie that it fosters.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
           </div>
           <div className="face2">
             <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
             <div className="face4">
               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
             </div>
             <div className="face5">
               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
             </div>
             <div className="face6">
               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
             </div>
          </div>
         </div>
       </div>
      <Loader type="pacman" />     </>
  )
}

export default About