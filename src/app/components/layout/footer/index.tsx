"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 w-full">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="text-center text-base text-gray-600 space-y-2">
          <p>
            © {currentYear}{" "}
            <span className="font-semibold text-gray-800">Azmi Ali</span>. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with using{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="hover:text-primary font-medium transition-colors"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="hover:text-primary font-medium transition-colors"
            >
              Tailwind CSS
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
