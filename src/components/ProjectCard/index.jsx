import React from 'react';
import { projects } from "../../data";
import Card from "./Card";

const colors = [
    '#fef3c7',
    '#fbcfe8',
    '#e7e5e4',
    '#bbf7d0',
    '#c7d2fe',
    '#c4b5fd',
]

export default function ProjectCard() {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <Card key={index} item={project} index={index} color={colors[index % colors.length]} />
                ))}
            </div>
        </div>
    );
}
