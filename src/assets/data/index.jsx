import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { BiLogoPostgresql } from "react-icons/bi";
    
  
  export const PROFILE = {
    name: "Robert Butcher",
    info: "Full-stack developer with a flair for graphic design.",
  };
  
  export const ABOUT = {
    text1:
      "I create dynamic, responsive websites that blend creativity with efficiency",
    text2:
      "Hello! I'm Robert Butcher, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
  };
  
  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "React",
      experience: "2+ years",
    },
    {
      icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
      name: "Next.js",
      experience: "1+ year",
    },
    {
      icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
      name: "Redis",
      experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
      name: "PostgreSQL",
      experience: "1+ year",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];