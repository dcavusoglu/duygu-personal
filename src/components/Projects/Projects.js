import React from 'react'
import projects from '../../../src/projects'
import './projects.css'

const Projects = () => {
  return (
    <div>
      <section id="projects" className="page-container">
        <div className="flex">
          <h1 className="page-title">
            My apps and my contributions
          </h1>
          <p className="page-detail">
            During the bootcamp, we have completed two projects in a team. Our frist project was an Air-Bnb clone which is X-Space and the final project, called Smart BOP, was a solotion to bop documentations.
            Following the bootcamp, I went on my studies about JavaScript and React. I tried a few projects with the help of tutorials, etc. I am still going on with my React App building journey! Thanks for visiting!
          </p>
        </div>
        <div className="project-container">
          {projects.map((project) => (
            <div key={project.id} className="project-items">
              <div className="image-container">
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                  />
              </div>
              <div className=''>
                <a
                  href={project.link}

                  className="project-title">
                    <span className="">
                      {project.title}
                    </span>
                </a>
              </div>
              <div>
                <p className="project-detail">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
    </div>
  )
}

export default Projects
