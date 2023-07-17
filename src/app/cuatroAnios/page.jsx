/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import Cards3648 from "../components/Cards/Cards3648";
import style from './pageCuatroAnios.module.css'
import NavBarCuatro from "../components/NavBarCuatro";

export default function cuatroAniosPage (){

    return (
        <div>
            <NavBarCuatro isActivitie={true}/>
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen overflow-hidden home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 gap-10 py-10 sm:py-10 sm:gap-5">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 mt-20 p-5 rounded-md text-center sm:mx-5 sm:p-3 sm:w-[300px] sm-m:mx-5 sm-m:p-3 sm-m:min-w-[400px]">
                    <p className=" text-teal-700 font-semibold text-lg sm:text-sm sm-m:text-base">"Los niños no son objetos a moldear, sino individuos a descubrir."</p>
                    <p className=" text-teal-500 font-light text-lg sm:text-sm sm-m:text-base">Magda Gerber</p>
                </div>
                <Cards3648/>

            </section>

            <section>
                
            </section>
        </div>
    )
}