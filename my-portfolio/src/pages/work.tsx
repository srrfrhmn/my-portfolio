import WorkItem from "@/components/WorkItem"
import {HL} from "@/lib/info"

export default function Work() {
    return (
      <>
        <main className={`main-cont p-4 md:p-10 lg:p-20`} style={{}}>
            <div className='text-left'>
                <h1 className='default-font mb-6 text-4xl tracking-tighter'> my work </h1>
                <p className="default-font text-neutral-300 mb-3 text-sm"><span className="text-neutral-500">feel free to contact me for my</span> resume.</p>
                <HL />
                <div className="rian" style={{}}>
                    <WorkItem 
                        company="Mely.ai"
                        position="Software Developer Intern"
                        duration="September - December 2023"
                        description= 
                        {
                            <p>
                                At Mely.ai, I worked on a platform that performed Intelligent Document Processing for the transportation and logistics industry.
                            </p>
                        }
                    />
                    <WorkItem 
                        company="Doorbie"
                        position="Software Developer Intern"
                        duration="January - August 2023"
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