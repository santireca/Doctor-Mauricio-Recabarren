'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import Doctor from '../utils/animations/Doctor.json';
import DoctorBW from '../utils/animations/DoctorBW.json';
import DoctorBlue from '../utils/animations/DoctorBlue.json'
import NavBar from "./components/NavBar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar/>
        <section class="flex my-auto items-center justify-center min-h-screen home-dark bg-fixed bg-gradient-to-t from-blue-200 to-blue-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 ">
          <div className=" flex justify-center items-center gap-20 p-5 
          laptop:gap-10
          sm:flex-col-reverse sm:gap-5
          sm-m:flex-col-reverse sm-m:gap-5">
            <div className=" w-[550px]
            laptop:w-[400px]
            sm-m:w-[390px]
            sm:w-[320px]">
              <h1 className=" text-6xl font-bold text-blue-900 
              laptop:text-4xl
              sm-m:text-4xl sm-m:text-center
              sm:text-3xl sm:text-center">Doctor Mauricio Recabarren</h1>
              <p className=" text-lg my-10 text-gray-800
              laptop:text-base laptop:my-5
              sm-m:text-base sm-m:text-center sm-m:my-5
              sm:text-sm sm:text-center sm:my-5">Médico pediatra con más de 20 años de experiencia y actual director del hospital Fleming de Mendoza.</p>
              <p className=" text-xl font-semibold text-blue-900 
              laptop:text-lg
              sm-m:text-lg sm-m:text-center
              sm:text-base sm:text-center">Matrícula n°: 18281219</p>
            </div>
            <div className="rounded-full w-80 h-80 relative overflow-hidden border-black border-solid border-[2px]
                      sm:w-52 sm:h-52 sm:my-3 sm-m:w-52 sm-m:h-52 sm-m:my-3 sm-s:w-52 sm-s:h-52 sm-s:my-3
                      laptop:w-[210px] laptop:h-[210px] laptop:rounded-full">
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1689304117/Grupales_eo3vrp.jpg" layout="fill" className='w-full h-full object-cover' alt="" />
            </div>
          </div>
        </section>
    </div>
  )
}
