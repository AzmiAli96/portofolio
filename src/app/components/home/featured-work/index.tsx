"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/featured-work");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[2px] text-primary uppercase font-semibold mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            The works that I have completed from start to finish with dedication and passion.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-primary/10 pt-10">
          {featureWork?.map((value: any, index: number) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20 bg-white"
            >
              {/* Gambar Project */}
              <div className="overflow-hidden">
                <Image
                  src={value?.image}
                  alt={value?.title}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Konten Project */}
              <div className="flex flex-col gap-3 p-6">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {value?.title}
                </h4>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {value?.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {value?.roles?.map((role: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Tombol Link ke Project */}
                {value?.Link && (
                  <div className="mt-4">
                    <Link
                      href={value.Link}
                      target="_blank"
                      className="inline-block text-sm font-medium text-white bg-primary hover:bg-primary/80 transition-colors px-5 py-2 rounded-full"
                    >
                      🔗 View Project
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
