import Link from 'next/link'

import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaCode } from 'react-icons/fa'

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/tarunpatil01"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/tarun-patil-73317024b/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/tarun_patil001/"
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/@tarunpatil001"
    },
    {
      icon: <FaCode />,
      path: "https://leetcode.com/u/tarunpatil01/"
    },
];
        

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles} flex space-x-4`}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
            </Link>
        );
        })}
    </div>
  )
}

export default Social
