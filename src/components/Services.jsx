import React from "react";
import Section from "./common/Section";

import commerce from "../assests/commerce.png";
import research from "../assests/research.png";
import web from "../assests/web.png";
import mobile from "../assests/mobile.png";

function Services() {
    const services = [
        {
            id: 1,
            image: commerce,
            title: "ECommerce Website",
        },
        {
            id: 2,
            image: web,
            title: "Web Development",
        },
        {
            id: 3,
            image: mobile,
            title: "Mobile Development",
        },
        {
            id: 4,
            image: research,
            title: "Research and Development",
        },
    ];

    return (
        <Section
            title="Services"
            subtitle="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        >
            <div className="grid gap-10 lg:grid-cols-2">
                {services.map(({ id, image, title }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center justify-center p-5 sahdow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-36 h-36 md:w-44 md:h-44 object-contain"
                        />
                        <h3 className="mt-5 text-base">{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Services;
