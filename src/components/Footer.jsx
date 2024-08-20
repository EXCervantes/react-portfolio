import { socials } from "../assets/data/socials";

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
        <div className="flex items-center justify-center gap-8">
            {socials.map((site, index) => (
                <a key={index} href={site.url} target="_blank" rel="noopener noreferrer">
                    {site.icon}
                </a>
            ))}
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            © 2024 Edwardo Cervantes. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
