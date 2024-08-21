import { Button } from "flowbite-react";

const ProjectCard = ({image, title, description, deployedUrl, githubUrl}) => {
return (
    <div>
    <a href={deployedUrl} className="m-4 block max-w-sm overflow-hidden rounded-lg hover:shadow-md hover:opacity-80">
        <div className="relative">
            <img className="w-full" src={image} alt={title} />
            <div className="flex flex-col justify-between p-4 text-white">
                <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                <p className="mb-4 text-medium font-medium">{description}</p>
            </div>
        </div>
        </a>
            <div className="flex justify-center">
                <Button size="xs" color="light" pill>
                    <a href={githubUrl} className="m-2 text-base">GitHub</a>
                </Button>
            </div>
    </div>
)
}

export default ProjectCard