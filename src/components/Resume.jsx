import { frontEndSkills, backEndSkills} from "../assets/data/resumeDetails"
import { Button } from "flowbite-react";
// import resumePDF from ".."

const Resume = () => {
return (
    <div className="container mx-auto mb-20" id="resume">
        <h2 className="mb-12 mt-20 text-center text-4xl">Download Resume
        </h2>
        <div>
        <button className="flex flex-wrap gap-2">
    {/* TODO make Resume and setup download button */}
        </button>
        </div>
        <h2 className="mb-12 mt-20 text-center text-4xl">Front End Proficiencies
        </h2>
        <div className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
            {frontEndSkills.map((frontend, index) => (
                <div key={index} className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <h3 className="px-6 text-xl lg:text-3xl">
                        {frontend.name}
                        </h3>
                    </div>
                    <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
                        <span>{frontend.experience}</span>
                    </div>
                    </div>
            ))}
        </div>
        <h2 className="mb-12 mt-20 text-center text-4xl">Back End Proficiencies
        </h2>
        <div className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
            {backEndSkills.map((backend, index) => (
                <div key={index} className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <h3 className="px-6 text-xl lg:text-3xl">
                        {backend.name}
                        </h3>
                    </div>
                    <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
                        <span>{backend.experience}</span>
                    </div>
                    </div>
            ))}
        </div>
    </div>
)
}

export default Resume