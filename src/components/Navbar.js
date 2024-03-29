/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4  	flex flex-wrap items-center text-base justify-center">
            <a href="/" class="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="/sql-editor" class="mr-5 hover:text-gray-900">
              SQL Editor
            </a>
          </nav>
          <a
            href="https://github.com/MKCA06"
            target="_blank"
            class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            rel="noreferrer"
          >
            GitHub
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
