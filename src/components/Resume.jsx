import { frontEndSkills, backEndSkills} from "../assets/data/resumeDetails"
import resumePDF from "../assets/docs/Edwardo-Cervantes-Resume.pdf"

const Resume = () => {
return (
    <div className="container mx-auto mb-20" id="resume">
        <h2 className="mb-12 mt-20 text-center text-4xl">Resume
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <a  href={resumePDF} download><span>Download Resume</span></a>
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
                    <div className="text-md font-semibold lg:text-xl">
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
                    <div className="text-md font-semibold lg:text-xl">
                        <span>{backend.experience}</span>
                    </div>
                    </div>
            ))}
        </div>
    </div>
)
}

export default Resume