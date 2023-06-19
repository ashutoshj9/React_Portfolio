import React, { useEffect, useRef } from 'react'
import './index.scss'
import LogoS from '../../../assets/images/pic.jpg'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      {/* <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" /> */}
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="#2F88FF"
          stroke="#000000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24 11L14 33"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 26L30 26"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24 11L34 33"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}

export default Logo
