import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {/* <header>
                <h1>Access Mate Australia</h1>
            </header> */}
            <Header />
            <div className="w-screen h-screen absolute pt-20 -z-10">
                    <div className="absolute left-[-3rem] top-[5rem] w-[20rem] h-[20rem] rounded-full bg-primary-blur blur-xl"></div>
                    <div className="absolute right-[-3rem] bottom-10 w-[20rem] h-[20rem] rounded-full bg-secondary-blur blur-2xl"></div>
                </div>
            <div className="my-32">
                <HeroSection />
            </div>

            <h1>MainLayout</h1>
            <hr />
            <main>{children}</main>
            {/* <footer>
                <p>© 2021 Access Mate Australia</p>
            </footer> */}
        </div>
    )
}