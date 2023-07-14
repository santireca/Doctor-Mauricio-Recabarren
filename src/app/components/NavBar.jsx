/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState, useEffect } from "react";

const NavBar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState(true);
    
    return (
        <div className={darkMode ? "dark" : ""}>
            <nav className=" h-20 z-10 bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 fixed w-screen px-10 py-7 flex items-center justify-center text-indigo-800 dark:text-white dark:bg-gray-900 dark:bg-opacity-70 dark:shadow-lg dark:backdrop-filter dark:backdrop-blur-md dark:border-black dark:border-opacity-18
            sm:w-screen sm:h-20 sm-m:w-screen sm-m:h-20
            laptop:w-screen ">
                    
                <ul className="flex items-center gap-10 font-semibold text-xl text-gray-800">
                    <li className="hover:text-indigo-800 hover:dark:text-indigo-400 transition duration-200">
                    <a href="https://asq-3.vercel.app" target='_blank'>Actividades</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;