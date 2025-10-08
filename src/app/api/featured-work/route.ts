import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "SITA (Sidang Tugas Akhir)",
        description: "Aplikasi berbasis web untuk mengelola proses sidang tugas akhir mahasiswa, mencakup pengajuan jadwal, penilaian dosen, dan dokumentasi hasil sidang. Proyek ini dikembangkan secara kolaboratif dalam kelompok PBL.",
        roles: ["Ui Designer", "Frontend Developer", "Backend Developer", "System Analyst"],
        image: "/images/feature-work/sita.png",
        Link: "https://github.com/AzmiAli96/project_ta"
    },
    {
        title: "E-commerce Sandal Online",
        description: "Sistem e-commerce sederhana untuk penjualan sandal secara online, dilengkapi fitur katalog produk, keranjang belanja, dan manajemen pesanan. Dikembangkan dengan fokus pada kemudahan pengguna dan tampilan responsif.",
        roles: ["Ui/UX Designer", "Frontend Developer", "Backend Developer", "System Analyst"],
        image: "/images/feature-work/Psandal.png",
        Link: "https://github.com/AzmiAli96/projek"
    },
    {
        title: "Mini Klinik",
        description: "Aplikasi layanan klinik yang dirancang menggunakan Flutter untuk mempermudah pasien dalam melihat jadwal dokter, melakukan pendaftaran pertemuan, dan rekomendasi obat dokter. Fokus pada tampilan yang ramah pengguna dan fungsionalitas efisien.",
        roles: ["Ui/UX Designer", "Frontend Developer", "Backend Developer", "System Analyst"],
        image: "/images/feature-work/obat.jpg",
        Link: "https://github.com/AzmiAli96/flutter_klinik"
    },
    {
        title: "Gemilang Cargo",
        description: "Sistem perhitungan tarif pengiriman barang berbasis algoritma K-Means, dengan penentuan prioritas berdasarkan wilayah dan berat kargo. Dikembangkan untuk membantu efisiensi operasional Toko Gemilang Kargo.",
        roles: ["Ui/UX Designer", "Frontend Developer", "Backend Developer", "System Analyst"],
        image: "/images/feature-work/cargo.png",
        Link: "https://github.com/AzmiAli96/Capstone-Azmi"
    },
    {
        title: "SMK Negeri 2 Batusangkar TEFA",
        description: "Website profil sekolah yang menampilkan informasi kegiatan Teaching Factory (TEFA) di SMK Negeri 2 Baatusangkar. Bertujuan untuk mempromosikan hasil karya siswa dan kegiatan pembelajaran berbasis industri.",
        roles: ["System Analyst", "Frontend Developer"],
        image: "/images/feature-work/smk.png",
        Link: "https://pengabdian-smk-2-batusangkar-fqns.vercel.app/landing"
    },

]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};