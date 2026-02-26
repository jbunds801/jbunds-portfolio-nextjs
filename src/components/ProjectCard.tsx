import { Project } from "../types/project_type";
import LinkPreview from "./LinkPreview";

interface ProjectCardProps {
    project: Project;
    isReversed: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed }) => {
    return (
        <div className={`border p-5 my-10 rounded-xl shadow h-56 flex gap-6
            ${isReversed ? 'flex-row-reverse text-end' : 'flex-row'}`}>

            <div className="flex flex-col flex-1 min-w-0 justify-between">
                <div>
                    <h3 className="text-xl font-bold py-2">{project.title}</h3>
                    <p>{project.description}</p>
                </div>

                <div className={`flex gap-4 py-1 ${isReversed ? 'flex-row-reverse text-end' : 'flex-row'}`}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#fd53f2] hover:drop-shadow-[0_0_2px_#ff8df7]"
                    >
                        View Project
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e1ff] hover:drop-shadow-[0_0_2px_#77eaf9]"
                    >
                        View GitHub
                    </a>
                </div>
            </div>

            <div className="w-50 h-full shrink-0">
                <LinkPreview url={project.link} title={project.title} />
            </div>
        </div>
    );
}

export default ProjectCard;
