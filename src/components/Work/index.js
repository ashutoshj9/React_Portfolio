import React from 'react'
import './index.scss'

const Work = () => {
  const projectList = [
    {
      id: 1,
      name: 'KANBAN BOARD',
      source: 'https://kanban-board-ashutosh.netlify.app/',
      image:
        'https://www.techrepublic.com/wp-content/uploads/2022/11/kanban-proofhub-better-trello-tr-770x431.jpeg',
    },
    {
      id: 2,
      name: 'In Progress',
      source: '',
      image: '',
    },
    {
      id: 3,
      name: 'In Progress',
      source: '',
      image: '',
    },
  ]

  const showProject = () => {
    const projects = projectList.map((item) => (
      <>
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
            <p>{item.name}</p>
          </div>
        </a>
      </>
    ))
    return projects
  }
  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>DESIGNS</h1>
          {showProject()}
        </div>
      </div>
    </>
  )
}

export default Work
