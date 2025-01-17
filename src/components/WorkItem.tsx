import { ReactNode } from "react";
import {HL} from "@/lib/info"

interface WorkItemProps {
    company: string;
    position: string;
    duration: string;
    description: ReactNode;
    isCurrent?: boolean;
    isEducation?: boolean;
}

export default function WorkItem({
    company = 'Company', 
    position = 'Position', 
    duration = '',
    description = <p>Default Description</p>,
    isCurrent = false,
    isEducation = false,
}: WorkItemProps) {
    return (
        <>
        <div>
            <div className="flex">
                <h2 className="default-font font-semibold font-medium text-xl mb-0.5 tracking-tight">{company}</h2>
                {isEducation && (
                    <p className="default-font text-neutral-300 mt-0.3 mb-1.5 text-sm" >
                        <span className="ml-2 inline-block border border-blue-700 text-white text-xs px-2 py-1 rounded-full">
                            Education
                        </span>
                    </p>    
                )}
            </div>
            <p className="default-font text-neutral-300 mb-3 text-sm">
                {position}
                {isCurrent && (
                    <span className="ml-2 inline-block border border-green-700 text-white text-xs px-2 rounded-full">
                        Current
                    </span>
                )}
                <span className="ml-2 text-neutral-500">{duration}</span>
            </p>
            <div className="default-font">{description}</div>
            <HL />
        </div>
        </>
    )
}