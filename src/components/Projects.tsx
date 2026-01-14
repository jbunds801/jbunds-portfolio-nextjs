import { projects, type Project } from "../data/projects";
//import Image from "next/image";

const Projects: React.FC = () => {
    return (
        <section className="mb-10">
            <h2 className="text-4xl font-semibold m-3 text-center">Projects</h2>

            <div className="p-8">
                {projects.reverse().map((project: Project, index: number) => (
                    <div key={index} className={`border p-5 my-10 rounded-xl shadow h-56 flex gap-6
                    ${index % 2 === 1 ? 'flex-row-reverse text-end' : 'flex-row'}`}>

                        <div className="flex flex-col flex-1 min-w-0 justify-between">
                            <div>
                                <h3 className="text-xl font-bold py-2">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>

                            <div className={`flex gap-4 py-1 ${index % 2 === 1 ? 'flex-row-reverse text-end'
                                : 'flew-row'}`}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:underline"
                                >
                                    View Project
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:underline"
                                >
                                    View GitHub
                                </a>
                            </div>
                        </div>

                        <div className="w-50 h-full flex items-center justify-center shrink-0 border">
                            {/* <Image /> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;