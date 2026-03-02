import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <section>
            <div>
                {projects.reverse().map((project, index: number) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        isReversed={index % 2 === 1}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;