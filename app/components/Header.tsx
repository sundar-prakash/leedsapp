"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="py-6 px-6 lg:px-24 flex justify-between items-cente ">
        <Link href="/">
          <Image
            src="/other/header.png"
            alt="LeadsApp"
            width={200}
            height={40}
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            id="fi_10513594"
          >
            <g clipRule="evenodd" fill="#000" fillRule="evenodd">
              <path d="m3.75 10c0-.69036.55964-1.25 1.25-1.25h30c.6904 0 1.25.55964 1.25 1.25 0 .6904-.5596 1.25-1.25 1.25h-30c-.69036 0-1.25-.5596-1.25-1.25z"></path>
              <path d="m3.75 30c0-.6904.55964-1.25 1.25-1.25h30c.6904 0 1.25.5596 1.25 1.25s-.5596 1.25-1.25 1.25h-30c-.69036 0-1.25-.5596-1.25-1.25z"></path>
              <path d="m10.4167 20c0-.6904.5596-1.25 1.25-1.25h23.3333c.6904 0 1.25.5596 1.25 1.25s-.5596 1.25-1.25 1.25h-23.3333c-.6904 0-1.25-.5596-1.25-1.25z"></path>
            </g>
          </svg>
        </button>
      </header>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#ED3059] block py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-[#ED3059] block py-2"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-700 hover:text-[#ED3059] block py-2"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/product-guide"
                  className="text-gray-700 hover:text-[#ED3059] block py-2"
                >
                  Product Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-[#ED3059] block py-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
