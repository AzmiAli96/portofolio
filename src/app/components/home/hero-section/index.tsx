import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

const HeroSection = () => {
    const socialIcon = [
        {
            href: "https://www.facebook.com/share/1GXFZwSd84/",
            icon: <Facebook className="w-[20px] h-[20px] text-white" strokeWidth={3} />,
            name: "Facebook",
        },
        {
            href: "https://www.instagram.com/1azmiali2/",
            icon: <Instagram className="w-[18px] h-[18px] text-white" strokeWidth={3} />,
            name: "Instagram",
        },
        {
            href: "https://www.linkedin.com/in/azmi-ali-57458b311/",
            icon: <Linkedin className="w-[18px] h-[18px] text-white" strokeWidth={2} />,
            name: "Linkedin",
        },
        {
            href: "https://github.com/AzmiAli96",
            icon: <Github className="w-[18px] h-[18px] text-white" strokeWidth={2} />,
            name: "Github",
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/scripts.jpg"} alt="banner-img" width={1080} height={287} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/images/hero-sec/Me-1.jpg"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Azmi Ali</h1>
                                <h5 className="text-violet font-normal">Software Enginear</h5>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Indonesia, Sumatera Barat</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link
                                                href={value?.href}
                                                key={index}
                                                className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                                aria-label={value.name}>
                                                <span className="flex items-center justify-center bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] p-2.5 sm:p-3.5 rounded-full transition">
                                                    {value.icon}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

