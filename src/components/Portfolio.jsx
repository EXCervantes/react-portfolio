import {projects} from '../assets/data/projects';
import Card from '../components/ProjectCard'

const Portfolio = () => {
    return (
        <div id="portfolio">
            <h2 className="mt-20 text-center text-6xl font-semibold">
                Projects
        </h2>
            <div className="flex flex-wrap justify-center py-8">
                {projects.map((project, index) => (
                    <div key={index}>
                        <Card image={project.image}
                        title={project.title}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        deployedUrl={project.deployedUrl} />
                    </div>
                    ))}
            </div>
        </div>
                )
}

export default Portfolio
