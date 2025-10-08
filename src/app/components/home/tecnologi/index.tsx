"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TecnologiaItem {
  name: string;
  image: string;
}

const Tecnologiview = () => {
  const [tecnologiaData, setTecnologiaData] = useState<TecnologiaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/experience");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setTecnologiaData(data?.tecnologiaData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {tecnologiaData.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-32 h-32 justify-center"
            >
              {/* Render image if path is a URL or icon if HTML */}
              {tech.image.includes("<i")
                ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: tech.image }}
                    className="text-4xl mb-2"
                  />
                )
                : (
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                )}

              <span className="text-sm font-medium text-gray-700 text-center mt-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologiview;
