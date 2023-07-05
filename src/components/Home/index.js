import React, { useEffect, useState } from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/logo-ss.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import Loader from 'react-loaders'

const RESUME_LINK = "https://drive.google.com/file/d/1raQRBhiktcMAqLR7HbfSlL6f6e_dsN80/view?usp=sharing";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['s', 'h', 'u', 't', 'o', 's', 'h']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '-',
    'S',
    't',
    'a',
    'c',
    'k',
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

  //#region LETTER ANIMATION
  const Letter_Animate = () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    Letter_Animate()
  }, [])
  //#endregion

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
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
              idx={16}
            />
          </h1>
          <h2>React Native / React / Node / C# / Sql</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br />
          <div>
            <a
              href={RESUME_LINK}
              className="flat-button1"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </div>
        </div>
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
