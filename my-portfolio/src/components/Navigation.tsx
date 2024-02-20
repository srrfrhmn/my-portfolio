import Link from 'next/link'

import { ScrollDown } from '../lib/info'

export default function Navigation() {
    return (
        <>
            <div className = 'nav-cont'>
                <div className={`nav-links p-4`}>
                    <span className="default-font "><Link href="/">about</Link></span>
                    <span className="default-font "><Link href="/work">work</Link></span>
                    <span className="default-font "><Link href="/gallery">gallery</Link></span>
                    {/* <ScrollDown /> */}
                </div>
            </div>
        </>
    )
}