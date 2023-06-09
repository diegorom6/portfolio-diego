import React from "react";
import Section from "./common/Section";

import { FaLinkedin, FaMailBulk } from "react-icons/fa";

const Contact = () => {
    const social = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/diego-romero-developer/",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            link: "mailto:diego.romero.v13@gmail.com",
            icon: <FaMailBulk />,
        },
    ];

    return (
        <Section
            title="Contacto"
            subtitle="¿Quieres hablar conmigo? ¡Estaré muy feliz de responderte!"
        >
            <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div>
                    <p className="max-w-xs md:max-w-lg">
                        Puedes contactarme por LinkedIn, por correo o dejarme tu
                        mensaje rellenando el formulario y yo me comunicaré
                        contigo.
                    </p>
                </div>
                <div className="flex w-full items-center justify-evenly text-3xl">
                    {social.map(({ id, link, icon }) => (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="duration-200 ease-in-out hover:text-emerald-200"
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                <div className="p-8 text-left w-full">
                    <form
                        action="https://getform.io/f/0e6ac526-eb13-4515-abeb-d32cc1f33782"
                        method="POST"
                    >
                        <div className="w-full">
                            <div className="flex flex-col my-2">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col my-2">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    Mensaje
                                </label>
                                <textarea
                                    name="message"
                                    rows="10"
                                    className="border-2 rounded-lg flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none p-2"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="my-8 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white py-3 px-6 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
