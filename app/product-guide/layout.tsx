"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Suspense } from "react";
import DocSidebar from "@/app/components/doc-sidebar";
import { getAllDocumentationRoutes } from "@/lib/documentation";

export default function DocumentationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const routes = getAllDocumentationRoutes();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden flex items-center justify-start p-4 border-b bg-white sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Product Guide</h1>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-1">
        {/* Sidebar Navigation - Mobile (Slide-in) */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Product Guide</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close navigation menu"
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
            <div className="flex-1 overflow-y-auto p-4">
              <Suspense fallback={<div>Loading navigation...</div>}>
                <DocSidebar
                  routes={routes}
                  onNavClick={() => setSidebarOpen(false)}
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation - Desktop (Always visible) */}
        <div className="hidden md:block w-64 lg:w-72 shrink-0 border-r bg-white">
          <div className="sticky top-0 p-6 h-screen overflow-y-auto">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Product Guide</h2>
              <p className="text-sm text-gray-500 mt-1">
                Documentation and tutorials
              </p>
            </div>
            <Suspense fallback={<div>Loading navigation...</div>}>
              <DocSidebar routes={routes} />
            </Suspense>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-12">
            <Suspense fallback={<div>Loading content...</div>}>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
