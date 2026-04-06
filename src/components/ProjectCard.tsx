import { Project } from "../types/project_type";
import LinkPreview from "./LinkPreview";

interface ProjectCardProps {
    project: Project;
    isReversed: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed }) => {
    return (
        <div className="shimmer-border max-w-4xl mx-auto mb-10 mt-3 rounded-xl bg-(--site-text) p-0.5">
            <div className={`p-5 rounded-xl shadow md:h-70 flex gap-6 bg-(--site-bg)
            ${isReversed ? 'flex-col md:flex-row-reverse text-end' : 'flex-col md:flex-row'}`}>

                <div className="relative flex flex-col p-2 flex-1 min-w-0 justify-between">
                    <div className="space-y-2.5">
                        <h3 className="text-l sm:text-xl" style={{ fontFamily: 'Trajan' }}>{project.title}</h3>
                        <p className="text-sm sm:text-base pb-1">{project.description}</p>
                    </div>

                    {/* <div className={`mt-4 md:absolute bottom-0 flex gap-4 p-2 text-nowrap ${isReversed ? 'justify-start md:right-0 flex-row-reverse text-end' */}
                    <div className={`mt-4 md:absolute bottom-0 flex gap-4 p-2 text-nowrap max-[400px]:!flex-col ${isReversed ? 'justify-start md:right-0 flex-row-reverse text-end'
                        : ' left-0 flex-row'}`}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-pink-cstm glow-pink"
                        >
                            View Project
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-cyan-cstm glow-cyan"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>

                <div className="aspect-square p-1 max-w-xs shrink-0 mx-auto md:mx-0">
                    <LinkPreview url={project.link} title={project.title} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
