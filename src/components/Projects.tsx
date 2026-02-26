import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <section className="mb-10">
            <h2 className="text-4xl font-semibold m-3 text-center">Projects</h2>

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