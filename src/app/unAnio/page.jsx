/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import CardsUnoCuatroMeses from "../components/Cards/CardsUnoCuatroMeses";
import CardsCuatroOchoMeses from "../components/Cards/CardsCuatroOchoMeses";
import CardsOchoDoceMeses from "../components/Cards/CardsOchoDoceMeses";
import style from './pageUnAnio.module.css'
import NavBar from "../components/NavBar";

export default function UnAnioPage (){
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <NavBar isActivitie={true} />
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen w-screen overflow-hidden  home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 gap-10 py-10 sm:py-10 sm:gap-5">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 mt-20 p-5 rounded-md text-center sm:mx-5 sm:p-3 sm:w-[300px] sm-m:mx-5 sm-m:p-3 sm-m:min-w-[400px]">
                    <p className=" text-orange-700 font-semibold text-lg sm:text-sm sm-m:text-base">"Los niños son el recurso más valioso y la esperanza más preciada para el futuro."</p>
                    <p className=" text-orange-600 font-light text-lg sm:text-sm sm-m:text-base">Lyndon B. Johnson</p>
                </div>
                <CardsUnoCuatroMeses/>
                <CardsCuatroOchoMeses/>
                <CardsOchoDoceMeses/>

            </section>
        </div>
    )
}