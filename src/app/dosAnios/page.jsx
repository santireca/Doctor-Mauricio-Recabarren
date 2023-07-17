/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import Cards1216 from "../components/Cards/Cards1216";
import Cards1620 from "../components/Cards/Cards1620";
import Cards2024 from "../components/Cards/Cards2024";
import style from './pageDosAnios.module.css'
import NavBarDos from "../components/NavBarDos";

export default function UnAnioPage (){
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <NavBarDos isActivitie={true}/>
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen overflow-hidden home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 gap-10 py-10 sm:py-10 sm:gap-5">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 mt-20 p-5 rounded-md text-center sm:mx-5 sm:p-3 sm:w-[300px] sm-m:mx-5 sm-m:p-3 sm-m:min-w-[400px]">
                    <p className=" text-orange-950 font-semibold text-lg sm:text-sm sm-m:text-base">"La sonrisa de un niño es la mejor recompensa para un pediatra."</p>
                    <p className=" text-orange-900 font-light text-lg sm:text-sm sm-m:text-base">Abraham Verghese</p>
                </div>
                <Cards1216/>
                <Cards1620/>
                <Cards2024/>

            </section>
        </div>
    )
}