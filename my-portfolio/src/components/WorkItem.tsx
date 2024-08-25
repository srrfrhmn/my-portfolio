import { ReactNode } from "react";
import {HL} from "@/lib/info"

interface WorkItemProps {
    company: string;
    position: string;
    duration: string;
    description: ReactNode;
    isCurrent?: boolean;
}

export default function WorkItem({
    company = 'Company', 
    position = 'Position', 
    duration = '',
    description = <p>Default Description</p>,
    isCurrent = false
}: WorkItemProps) {
    return (
        <>
        <div>
            <h2 className="default-font font-semibold font-medium text-xl mb-0.5 tracking-tight">{company}</h2>
            <p className="default-font text-neutral-300 mb-3 text-sm">
                {position}
                {isCurrent && (
                    <span className="ml-2 inline-block border border-green-700 text-white text-xs px-2 py-1 rounded-full">
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