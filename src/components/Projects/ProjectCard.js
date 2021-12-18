import React from 'react'
import './project-card.css'

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
			<div className="project-info">
				<label className="project-title">{project.title}</label>
				<div className="project-links">
					{project.demo && (
						<a
							href={project.demo}
							className="project-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="link-button">
							<i className="fas fa-link"></i> Demo
							</div>
						</a>
					)}
					{project.github && (
						<a
							href={project.github}
							className="project-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="link-button">
                            <i class="fab fa-github"></i>
								Github
							</div>
						</a>
					)}
				</div>
				<p className="project-about">{project.about}</p>
				<div className="project-tags">
					{project.tags.map((tag) => (
						<label key={tag} className="tag">
							{tag}
						</label>
					))}
				</div>
			</div>
			<img src={project.image} alt={project.title} className="project-photo" />
		</div>
    )
}

export default ProjectCard
