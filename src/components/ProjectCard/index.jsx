import React from 'react';
import { projects } from "../../data";
import Card from "./Card";

export default function ProjectCard() {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <Card key={index} item={project} index={index} />
                ))}
            </div>
        </div>
    );
}
