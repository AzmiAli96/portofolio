import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/front-end-programming.png",
        role: "Magang - PT. Indiaga Nusa Digitama",
        location: "Bandung",
        startYear: "Aug 2025",
        endYear: "Dec 2025",
        bulletPoints: [
            "Melakukan deteksi dan perbaikan bug pada aplikasi web yang sedang dikembangkan.",
            "Mendukung tim dalam pengembangan fitur baru sesuai kebutuhan klien.",
        ],
    },
    {
        icon: "/images/icon/design.png",
        role: "SMK Negeri 2 Batusangkar (TEFA)",
        location: "Batusangkar",
        startYear: "May 2025",
        endYear: "Aug 2025",
        bulletPoints: [
            "Berperan dalam analisis sistem dan perancangan aplikasi web proyek TEFA.",
            "Bertanggung jawab sebagai Frontend Developer dalam proses pengembangan aplikasi.",
        ],
    },
    {
        icon: "/images/icon/coding.png",
        role: "Project Kampus - Politeknik Negeri Padang",
        location: "Padang",
        startYear: "Mar 2024",
        endYear: "Present",
        bulletPoints: [
            "Proyek PBL SITA: Memimpin tim dan berperan sebagai Backend serta Frontend Developer.",
            "E-commerce Sandal Online: Membangun aplikasi e-commerce sederhana sebagai Fullstack Developer.",
            "Capstone Project Gemilang Cargo: Mengembangkan sistem perhitungan tarif dan prioritas pengiriman berbasis algoritma K-Means sebagai Fullstack Developer.",
        ],
    },
];


const educationData = [
    {
        date: "Mar 2024 - Present",
        title: "Sofware Developement",
        subtitle: "Politeknik Negeri Padang - Padang, Indonesia"
    },
    {
        date: "Aug 2024 - Jan 2025",
        title: "Mobile App Design",
        subtitle: "Politeknik Negeri Padang - Padang, Indonesia"
    },
    {
        date: "Mar 2023 - Dec 2023",
        title: "UI/UX Design Immersive",
        subtitle: "Politeknik Negeri Padang - Padang, Indonesia"
    }
];


const tecnologiaData = [
    {
        name: "Laravel",
        image: "/images/tecnologi/icons8-laravel-96.png"
    },
    {
        name: "Next JS",
        image: "/images/tecnologi/icons8-nextjs-48.png"
    },
    {
        name: "Express JS",
        image: "/images/tecnologi/icons8-express-js-50.png"
    },
    {
        name: "Flutter",
        image: "/images/tecnologi/icons8-flutter-96.png"
    },
    {
        name: "HTML",
        image: "/images/tecnologi/icons8-html-96.png"
    },
    {
        name: "CSS",
        image: "/images/tecnologi/icons8-css-100.png"
    },
    {
        name: "PHP",
        image: "/images/tecnologi/icons8-php-48.png"
    },
    {
        name: "JavaScript",
        image: "/images/tecnologi/icons8-javascript-48.png"
    },
    {
        name: "TypeScript",
        image: "/images/tecnologi/icons8-typescript-48.png"
    },
    {
        name: "MySQL",
        image: "/images/tecnologi/icons8-mysql-96.png"
    },
    {
        name: "PostgreSQL",
        image: "/images/tecnologi/icons8-postgresql-96.png"
    }
];


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        tecnologiaData
    });
};