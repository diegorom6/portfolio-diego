import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import p1 from "../assests/p1.jpg";
import p2 from "../assests/p2.jpg";
import p3 from "../assests/p3.jpg";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: p1,
            title: "Blog",
            github: "https://github.com/diegorom6/mern-blog",
            demo: "https://github.com/diegorom6/mern-blog",
        },
        {
            id: 2,
            image: p2,
            title: "Portafolio Personal",
            github: "https://github.com/diegorom6/portfolio-diego",
            demo: "https://github.com/diegorom6/portfolio-diego",
        },
        {
            id: 3,
            image: p3,
            title: "Estudio Fotográfico",
            demo: "https://fucoestudio.com",
        }

    ];

    return (
        <Section
            title="Showcase"
            subtitle="Estos son algunos de los proyectos que he hecho de manera independiente."
        >
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
                {projects.map(({ id, image, title, github, demo }) => (
                    <div
                        key={id}
                        className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
                    >
                        <img src={image} alt={title} className="w-2/3" />
                        <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                            <h2>{title}</h2>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg cursor-pointer duration-150 hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg cursor-pointer duration-150 hover:scale-110"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Portfolio;
