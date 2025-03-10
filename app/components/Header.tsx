"use client"
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
          <Image src="/header.png" alt="LeadsApp" width={200} height={40} />
        </Link>
        <button 
          onClick={toggleSidebar}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-500"></span>
          <span className="block w-6 h-0.5 bg-gray-500"></span>
          <span className="block w-6 h-0.5 bg-gray-500"></span>
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
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button 
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-700 hover:text-blue-600 block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 block py-2">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/leads" className="text-gray-700 hover:text-blue-600 block py-2">
                  Leads
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-gray-700 hover:text-blue-600 block py-2">
                  Settings
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