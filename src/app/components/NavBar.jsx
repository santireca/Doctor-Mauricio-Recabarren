/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState, useEffect } from "react";

const NavBar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState(true);
    
    return (
        <div className={darkMode ? "dark" : ""}>
            <nav className=" h-20 z-10 bg-blue-400 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-blue-400 border-opacity-18 fixed w-screen px-10 py-7 flex items-center justify-center text-indigo-800 dark:text-white dark:bg-gray-900 dark:bg-opacity-70 dark:shadow-lg dark:backdrop-filter dark:backdrop-blur-md dark:border-black dark:border-opacity-18
            sm:w-screen sm:h-16 sm-m:w-screen sm-m:h-160
            laptop:w-screen ">
                    
                <ul className="flex items-center gap-10 font-semibold text-lg text-gray-100
                sm:text-lg
                sm-m:text-lg">
                    <li className="hover:text-blue-900 hover:dark:text-blue-200 hover:scale-105 transition duration-300">
                        <a href="https://asq-3.vercel.app" target='_blank'>Actividades</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;