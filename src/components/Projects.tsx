import { projects, type Project } from "../data/projects";

const Projects: React.FC = () => {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>

            <div className="p-8 space-y-10">
                {projects.map((project: Project, index: number) => (
                    <div key={index} className="border p-5 rounded-xl shadow h-56">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p>{project.description}</p>

                        <div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:underline mt-2 inline-block"
                            >
                                View Project
                            </a>

                            <br />

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:underline mt-2 inline-block"
                            >
                                View GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;