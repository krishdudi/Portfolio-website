import React from "react";
import { ProjectsData } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import Separator from "../Separator/Separator";
import "./index.css";

const Project = () => {
	const data = ProjectsData;
	return (
		<div className="container projects">
			<Separator />
			<label className="section-title">Projects</label>
			<div>
				{data.map((project) => {
					return <ProjectCard project={project} key={project.id} />;
				})}
			</div>
		</div>
	);
};

export default Project;