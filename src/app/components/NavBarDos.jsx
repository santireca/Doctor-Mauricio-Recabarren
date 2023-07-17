/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {MdArrowBack} from 'react-icons/md'

const NavBarDos = ({ isActivitie }) => {

    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState(true);

    
    return (
        <div className={darkMode ? "dark" : ""}>
            {
                isActivitie ? (
                    <nav className=" h-20 z-10 bg-orange-950 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-blue-400 border-opacity-18 fixed w-screen px-10 py-7 flex items-center justify-center text-indigo-800 dark:text-white dark:bg-gray-900 dark:bg-opacity-70 dark:shadow-lg dark:backdrop-filter dark:backdrop-blur-md dark:border-black dark:border-opacity-18
                    sm:w-screen sm:h-16 sm:justify-end sm:px-5
                    sm-m:w-screen sm-m:h-160 sm-m:justify-end sm-m:px-5
                    laptop:w-screen ">
                        <Link href={'/edad'} className=' flex items-center'>
                            <MdArrowBack className=' hidden sm:block sm-m:block absolute text-2xl left-5 text-white hover:scale-105 transition duration-300'/>
                        </Link>
                        <ul className="flex items-center gap-10 font-semibold text-lg text-white
                        sm:text-lg
                        sm-m:text-lg">
                            <li className=" hover:dark:text-blue-200 hover:scale-105 transition duration-300">
                                <Link href={'/'}>Inicio</Link>
                            </li>
                            <li className=" hover:dark:text-blue-200 hover:scale-105 transition duration-300">
                                <Link href={'/Introduccion'}>Actividades</Link>
                            </li>
                            
                        </ul>
                    </nav>
                ) : (
                    <nav className=" h-20 z-10 bg-blue-400 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-blue-400 border-opacity-18 fixed w-screen px-10 py-7 flex items-center justify-center text-indigo-800 dark:text-white dark:bg-gray-900 dark:bg-opacity-70 dark:shadow-lg dark:backdrop-filter dark:backdrop-blur-md dark:border-black dark:border-opacity-18
            sm:w-screen sm:h-16 sm-m:w-screen sm-m:h-160
            laptop:w-screen ">
                    
                <ul className="flex items-center gap-10 font-semibold text-lg text-gray-100
                sm:text-lg
                sm-m:text-lg">
                    <li className="hover:text-blue-900 hover:dark:text-blue-200 hover:scale-105 transition duration-300">
                        <Link href={'/'}>Inicio</Link>
                    </li>
                    <li className="hover:text-blue-900 hover:dark:text-blue-200 hover:scale-105 transition duration-300">
                        <Link href={'/Introduccion'}>Actividades</Link>
                    </li>
                    
                </ul>
            </nav>
                )
            }
        </div>
    )
}

export default NavBarDos;