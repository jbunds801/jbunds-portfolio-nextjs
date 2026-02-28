import { Project } from "../types/project_type";
import LinkPreview from "./LinkPreview";

interface ProjectCardProps {
    project: Project;
    isReversed: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed }) => {
    return (
        <div className="shimmer-border-wrapper my-10 rounded-xl p-[1px]">
            <div className={`p-5 rounded-xl shadow h-56 flex gap-6 bg-[#171717]
            ${isReversed ? 'flex-row-reverse text-end' : 'flex-row'}`}>

                <div className="flex flex-col flex-1 min-w-0 justify-between">
                    <div>
                        <h3 className="text-xl font-bold py-2" style={{ fontFamily: 'Trajan' }}>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>

                    <div className={`flex gap-4 py-1 ${isReversed ? 'flex-row-reverse text-end' : 'flex-row'}`}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-cstm glow-pink"
                        >
                            View Project
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-cstm glow-cyan"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>

                <div className="aspect-square h-full shrink-0">
                    <LinkPreview url={project.link} title={project.title} />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
