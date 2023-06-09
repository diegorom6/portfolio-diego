import React from "react";

function Section({ title, subtitle, children }) {
    return (
        <section className="min-h-fit flex flex-col justify-start items-center py-16 text-center">
            <h3 className="py-3 text-emerald-400 text-3xl lg:text-5xl">{title}</h3>
            <p className="max-w-xl mb-10 text-sm md:text-base ">{subtitle}</p>
            {children}
        </section>
    );
}

export default Section;
