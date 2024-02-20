import { ReactNode } from "react";
import {HL} from "@/lib/info"

interface WorkItemProps {
    company: string;
    position: string;
    duration: string;
    description: ReactNode;
}

export default function WorkItem({
    company = 'Company', 
    position = 'Position', 
    duration = '',
    description = <p>Default Description</p>
}: WorkItemProps) {
    return (
        <>
        <div>
            <h2 className="default-font font-semibold font-medium text-xl mb-0.5 tracking-tight">{position}</h2>
            <p className="default-font text-neutral-300 mb-3 text-sm">{company}, <span className="text-neutral-500">{duration}</span></p>
            <div className="default-font">{description}</div>
            <HL />
        </div>
        </>
    )
}