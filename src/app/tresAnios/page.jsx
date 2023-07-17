/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import Cards2430 from "../components/Cards/Cards2430";
import Cards3036 from "../components/Cards/Cards3036";
import style from './pageTresAnios.module.css'
import NavBarTres from "../components/NavBarTres";

export default function tresAniosPage (){

    return (
        <div>
            <NavBarTres isActivitie={true}/>
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen overflow-hidden home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 gap-10 py-10 sm:py-10 sm:gap-5">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 mt-20 p-5 rounded-md text-center sm:mx-5 sm:p-3 sm:w-[300px] sm-m:mx-5 sm-m:p-3 sm-m:min-w-[400px]">
                    <p className=" text-sky-700 font-semibold text-lg sm:text-sm sm-m:text-base">"Un niño no es un vaso que llenar, sino un fuego que encender."</p>
                    <p className=" text-sky-500 font-light text-lg sm:text-sm sm-m:text-base">François Rabelais</p>
                </div>
                <Cards2430/>
                <Cards3036/>

            </section>

            <section>
                
            </section>
        </div>
    )
}