/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import Cards4860 from "../components/Cards/Cards4860";
import Cards6066 from "../components/Cards/Cards6066";
import style from './pageCincoAnios.module.css'
import NavBarCinco from "../components/NavBarCinco";

export default function cincoAniosPage (){

    return (
        <div>
            <NavBarCinco isActivitie={true} /> 
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen overflow-hidden home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 gap-10 py-10 sm:py-10 sm:gap-5">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 mt-20 p-5 rounded-md text-center sm:mx-5 sm:p-3 sm:w-[300px] sm-m:mx-5 sm-m:p-3 sm-m:min-w-[400px]">
                    <p className=" text-blue-900 font-semibold text-lg sm:text-sm sm-m:text-base">"El cuidado de los niños es una inversión en el futuro de la humanidad."</p>
                    <p className=" text-blue-800 font-light text-lg sm:text-sm sm-m:text-base">C. Everett Koopr</p>
                </div>
                <Cards4860/>
                <Cards6066/>

            </section>

            <section>
                
            </section>
        </div>
    )
}