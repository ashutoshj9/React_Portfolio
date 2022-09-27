import React, { useEffect, useState } from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/logo-ss.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
//   const hi = ['H', 'i,']
//   const im = ['I', "'m"]
  const nameArray = ['s', 'h', 'u', 't', 'o', 's', 'h']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
          {/* <AnimatedLetters letterClass={letterClass} strArray={hi} idx={11} /> */}
          <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          {/* <AnimatedLetters letterClass={letterClass} strArray={im} idx={13} /> */}
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>React / Python / Java / C#</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <br/>
        <div>
        <a href="https://drive.google.com/uc?export=download&id=1dpj9CxsCD9eWNGip5ZmXHXAsN5mH2SWg" className="flat-button1">
          RESUME
        </a>
        </div>
      </div>
      <Logo/>
    </div>

    <Loader type='pacman' />
    </>
  )
}

export default Home
