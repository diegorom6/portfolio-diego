import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
    const social = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/diego-romero-developer/",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            link: "https://github.com/diegorom6",
            icon: <FaGithub />,
        },
    ];

    return (
        <section className="flex flex-col justify-start items-center text-center p-20">
            <h2 className="text-5xl text-emerald-400 upper font-bold">
                Diego Romero
            </h2>
            <h3 className="py-3 text-2xl">Desarrollador Web</h3>
            <p className="max-w-4xl py-8">
                ¡Bienvenid@ a mi portafolio! Soy Diego Romero, desarrollador web
                con +1 año de experiencia. Acá podrás ver mis proyectos
                independientes y también contactarte conmigo. ¡Gracias por
                visitar mi sitio!
            </p>

            <div className="flex justify-evenly text-3xl w-full md:w-1/3">
                {social.map(({ id, link, icon }) => (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={id}
                        className="cursor-pointer duration-300 hover:text-emerald-400"
                    >
                        {icon}
                    </a>
                ))}
            </div>

            <div className="w-40 flex justify-center">
                <a
                    href="./publicCV.pdf"
                    download={true}
                    className="flex items-center justify-center mt-10 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-lg py-2 w-full"
                >
                    Currículum
                </a>
            </div>
        </section>
    );
}

export default Hero;
