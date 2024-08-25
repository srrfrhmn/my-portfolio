import { useEffect } from 'react';
import { useRouter } from 'next/router';
import WorkItem from "@/components/WorkItem"
import {HL} from "@/lib/info"

export default function Work() {
    const router = useRouter();

    return (
      <>
        <main className={`main-cont p-4 md:p-10 lg:p-20`} style={{}}>
            <div className='text-left'>
                <h1 className='default-font mb-6 text-4xl tracking-tighter'> my career </h1>
                <p className="default-font text-neutral-300 mb-3 text-sm"><span className="text-neutral-500">feel free to contact me for my</span> resume.</p>
                <HL />
                <div className="rian" style={{}}>
                    <WorkItem 
                        company="McMaster University"
                        position="Bachelor of Arts in Computer Science and Economics"
                        duration="Expected Graduation: May 2026"
                        description= 
                        {
                            <p>
                                
                            </p>
                        }
                    />
                    {/* Add more education items if needed */}
                </div>

                <div className="rian" style={{}}>
                    <WorkItem 
                        company="Dayforce"
                        position="Software Engineer Intern"
                        duration="May 2024 - December 2024"
                        description= 
                        {
                            <p>
                                At Dayforce, I worked on the Tax and Payments team, helping to process billions of dollars in transactions for clients across North America.
                            </p>
                        }
                        isCurrent={true}
                    />
                    <WorkItem 
                        company="Mely.ai"
                        position="Software Engineer Intern"
                        duration="September 2023 - December 2023"
                        description= 
                        {
                            <p>
                                At Mely.ai, I worked on a platform that performed Intelligent Document Processing for the transportation and logistics industry.
                            </p>
                        }
                    />
                    <WorkItem 
                        company="Doorbie"
                        position="Software Engineer Intern"
                        duration="January 2023 - August 2023"
                        description= 
                        {
                            <p>
                                At Doorbie, I worked on a Property Management & Marketplace Platform, to simplify the rental process from start to finish for both tenants and landlords.
                            </p>
                        }
                    />
                    <WorkItem 
                        company="Prograsp"
                        position="Programming Instructor"
                        duration="August 2021 - February 2022"
                        description= 
                        {
                            <p>
                                At Prograsp, I worked to streamline the grading workflow for programming assignments, and worked with students to help them write better code. 
                            </p>
                        }
                    />
                    <WorkItem 
                        company="Junior Achievement"
                        position="Project Manager"
                        duration="September 2018 - March 2020"
                        description= 
                        {
                            <p>
                                At Junior Achievement, I managed team of students and worked with experienced mentors to create a student driven business and achieve sales targets month-to-month.  
                            </p>
                        }
                    />
                </div>
            </div>
        </main>
      </>
    )
}