import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const workTitle = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']
  const projectList = [
    {
      id: 1,
      name: 'PASSWORD GENERATOR',
      source: 'https://password-generator-aj9.netlify.app/',
      image:
        'https://cdn.pixabay.com/photo/2016/02/16/16/57/login-1203603_1280.png',
    },
    {
      id: 2,
      name: 'KANBAN BOARD',
      source: 'https://kanban-board-ashutosh.netlify.app/',
      image:
        'https://www.techrepublic.com/wp-content/uploads/2022/11/kanban-proofhub-better-trello-tr-770x431.jpeg',
    },
    {
      id: 3,
      name: 'WINKIEYE',
      source: 'https://winkieye.netlify.app/',
      image:
        'https://www.mindfiresolutions.com/blog/wp-content/uploads/Ecommerce-App-for-Eyewear-Store.jpg',
    },
    {
      id: 4,
      name: 'PORTFOLIO',
      source: 'https://ashutoshj9.github.io/Portfolio/',
      image:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-make-an-online-portfolio.png',
    },
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

  const showProject = () => {
    const projects = projectList.map((item) => (
      <div key={item.id} className="project-container">
        <a href={item.source} target="_blank" rel="noreferrer">
          <div
            className="projects-zone"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
          <p>{item.name}</p>
        </a>
      </div>
    ));
    return projects;
  };
  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={workTitle}
              idx={8}
            />
          </h1>
          {showProject()}
        </div>
      </div>
    </>
  )
}

export default Work
