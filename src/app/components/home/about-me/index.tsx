
const AboutMe = () => {
    const servicesBedge = ["Web Development", "Front-end Development", "Back-end Development", "Full-stack Development", "API Development", "Database Management", "Software Testing", "User Experience", "UI Development", "Mobile App Design", "Prototyping",];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Hey there. I'm Azmi Ali — Software Engineer based in Indonesia, currently <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">Recently graduated in Information Technology.</span> I’m passionate about building <span className="border-b-2">web applications.</span></h2>
                            <h5 className="text-secondary font-normal">Currently exploring opportunities to contribute to impactful digital products.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Services</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <div key={index} className="w-fit py-1.5 px-3 border border-primary/10 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe