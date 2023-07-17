/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import NavBar from "../components/NavBar";


export default function EdadPage (){
    return (
        <div>
            <NavBar />
            <section className="flex flex-col my-auto items-center justify-center min-h-screen home-dark bg-fixed bg-gradient-to-t from-blue-200 to-blue-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 gap-10 py-10 sm:py-6">
                <h1 className="text-5xl font-bold py-2 text-blue-800 dark:text-blue-600 sm-m:text-4xl sm:text-2xl ">Seleccione la edad</h1>
                <div className=" flex flex-wrap justify-center gap-10">
                    <Link href={'/unAnio'}>
                        <div className=" flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md w-[300px] h-[485px] cursor-pointer hover:scale-105 transition duration-300 laptop:w-[250px] laptop:h-[382px] sm-m:w-[250px] sm-m:h-[382px] sm:w-[250px] sm:h-[382px]">
                            <h2 className=" text-3xl text-indigo-800 font-semibold mb-10 laptop:mb-5 sm-m:mb-5 sm:mb-5">0 a 1 año</h2>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1687579934/chupete_ikqayw.png" alt="" className=" w-64 mb-10 grayscale hover:grayscale-0 laptop:w-[214px] laptop:mb-5 sm-m:mb-5 sm-m:grayscale-0 sm:mb-5 sm:grayscale-0"/>
                            <p className=" text-blue-500 text-center">"Creciendo y aprendiendo cada día"</p>
                        </div>
                    </Link>

                    <Link href={'/dosAnios'}>
                        <div className=" flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md w-[300px] h-[485px] cursor-pointer hover:scale-105 transition duration-300 laptop:w-[250px] laptop:h-[382px] sm-m:w-[250px] sm-m:h-[382px] sm:w-[250px] sm:h-[382px]">
                            <h2 className=" text-3xl text-indigo-800 font-semibold mb-10 laptop:mb-5 sm-m:mb-5 sm:mb-5">1 a 2 años</h2>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1687579583/descargar_vlxzqn.png" alt="" className=" w-64 mb-10 grayscale hover:grayscale-0 laptop:w-[214px] laptop:mb-5 sm-m:mb-5 sm-m:grayscale-0 sm:mb-5 sm:grayscale-0"/>
                            <p className=" text-blue-500 text-center">"Llenando el mundo de risas y travesuras"</p>
                        </div>
                    </Link>

                    <Link href={'/tresAnios'}>
                        <div className=" flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md w-[300px] h-[485px] cursor-pointer hover:scale-105 transition duration-300 laptop:w-[250px] laptop:h-[382px] sm-m:w-[250px] sm-m:h-[382px] sm:w-[250px] sm:h-[382px]">
                            <h2 className=" text-3xl text-indigo-800 font-semibold mb-10 laptop:mb-5 sm-m:mb-5 sm:mb-5">2 a 3 años</h2>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1687579899/triciclo_mgqzpm.png" alt="" className=" w-64 mb-10 grayscale hover:grayscale-0 laptop:w-[214px] laptop:mb-5 sm-m:mb-5 sm-m:grayscale-0 sm:mb-5 sm:grayscale-0"/>
                            <p className=" text-blue-500 text-center">"Pequeño explorador en acción"</p>
                        </div>
                    </Link>

                    <Link href={'/cuatroAnios'}>
                        <div className=" flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md w-[300px] h-[485px] cursor-pointer hover:scale-105 transition duration-300 laptop:w-[250px] laptop:h-[382px] sm-m:w-[250px] sm-m:h-[382px] sm:w-[250px] sm:h-[382px]">
                            <h2 className=" text-3xl text-indigo-800 font-semibold mb-10 laptop:mb-5 sm-m:mb-5 sm:mb-5">3 a 4 años</h2>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1687580228/paleta_colores_geyfuq.png" alt="" className=" w-64 mb-10 grayscale hover:grayscale-0 laptop:w-[214px] laptop:mb-5 sm-m:mb-5 sm-m:grayscale-0 sm:mb-5 sm:grayscale-0"/>
                            <p className=" text-blue-500 text-center">"Curiosidad sin límites, siempre descubriendo algo nuevo"</p>
                        </div>
                    </Link>

                    <Link href={'/cincoAnios'}>
                        <div className=" flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md w-[300px] h-[485px] cursor-pointer hover:scale-105 transition duration-300 laptop:w-[250px] laptop:h-[382px] sm-m:w-[250px] sm-m:h-[382px] sm:w-[250px] sm:h-[382px]">
                            <h2 className=" text-3xl text-indigo-800 font-semibold mb-10 laptop:mb-5 sm-m:mb-5 sm:mb-5">4 a 5 años</h2>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1687580176/libros_j6xodu.png" alt="" className=" w-64 mb-10 grayscale hover:grayscale-0 laptop:w-[214px] laptop:mb-5 sm-m:mb-5 sm-m:grayscale-0 sm:mb-5 sm:grayscale-0"/>
                            <p className=" text-blue-500 text-center">"¡Preparado/a para el mundo escolar!"</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}