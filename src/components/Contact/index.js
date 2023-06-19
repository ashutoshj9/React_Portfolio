import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

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

  //#region SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_kkwa2wc',
        'template_2tpapig',
        refForm.current,
        '6womwaufSmKJORheH'
      )
      .then(
        () => {
          alert('Message Successfully Sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  //#endregion

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    id="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    style={{ color: '#000' }}
                    id="message"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ashutosh Jha,
          <br />
          India,
          <br />
          Sector 6, HSR Layout,
          <br />
          Bengaluru, Karnataka
          <br />
          <span>ashutosh199900@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[12.9144668, 77.632632]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.9144668, 77.632632]}>
              <Popup>I am here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
