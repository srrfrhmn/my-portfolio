import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaUser, FaBriefcase, FaImage } from 'react-icons/fa'

import { ScrollDown } from '../lib/info'

export default function Navigation() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1650)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {isMobile ? (
                <MobileNavigation currentPath={pathname} />
            ) : (
                <div className='nav-cont'>
                    <div className={`nav-links p-4`}>
                        <NavLink href="/" currentPath={pathname} label="/me" />
                        <NavLink href="/career" currentPath={pathname} label="/career" />
                        <NavLink href="/gallery" currentPath={pathname} label="/gallery" />
                        {/* <ScrollDown /> */}
                    </div>
                </div>
            )}
        </>
    )
}

function NavLink({ href, currentPath, label }: { href: string; currentPath: string; label: string }) {
    const isActive = href === currentPath
    return (
        <span className={`default-font group relative inline-block ${isActive ? 'text-gray-600' : ''}`}>
            <Link href={href} className={`${isActive ? 'pointer-events-none' : 'hover:text-gray-400'}`}>
                {!isActive && (
                    <span className="relative inline-block">
                        {label}
                    </span>
                )}
                {isActive && (
                    <span className="relative inline-block">
                        {label}
                    </span>
                )}
            </Link>
        </span>
    )
}

function MobileNavigation({ currentPath }: { currentPath: string }) {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 backdrop-blur-md rounded-full shadow-lg p-2">
            <div className="flex space-x-4">
                <MobileNavLink href="/" currentPath={currentPath} icon={<FaUser />} />
                <MobileNavLink href="/career" currentPath={currentPath} icon={<FaBriefcase />} />
                <MobileNavLink href="/gallery" currentPath={currentPath} icon={<FaImage />} />
            </div>
        </div>
    )
}

function MobileNavLink({ href, currentPath, icon }: { href: string; currentPath: string; icon: React.ReactNode }) {
    const isActive = href === currentPath
    return (
        <Link 
            href={href} 
            className={`p-2 rounded-full transition-all duration-200 ease-in-out
                ${isActive 
                    ? 'bg-white bg-opacity-30 text-white' 
                    : 'text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white'
                }`}
        >
            {icon}
        </Link>
    )
}