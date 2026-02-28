import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl m-3 text-center" style={{ fontFamily: 'Trajan' }}>Projects</h2>

            <div className="p-8">
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