import React, { useState } from "react";


export default function Home() {
    return (
        <body className="leading-normal tracking-normal text-white gradient bg-gradient-to-r from-cyan-500 to-blue-500">
            <nav id="header" className="w-full z-30 top-0 text-white mr-5">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className=" pl-4 flex items-center">
                        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                           href="#">
                            UCLASS
                        </a>

                    </div>
                    <div
                        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                        id="nav-content">
                        <ul className="list-reset lg:flex justify-start flex-1 items-center">
                            <li className="mr-3">
                                <p className="pr-5 text-white">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    The only platform that organizes assignments, chats, and files together
                                </p>
                            </li>
                            <li className="mr-3">
                            </li>
                            <li className="mr-3">
                            </li>
                        </ul>
                        <a href="https://forms.gle/69rUu5j2ryVajxCz5" id="navAction"
                           className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Get notified
                        </a>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
            </nav>
            {/*hero */}
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/*left col*/}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left mr-5">
                        <p className="uppercase tracking-loose w-full">Born at UCLA</p>
                        <h1 className="my-4 text-5xl font-bold leading-tight">
                            Tired of tabbing between Canvas, GroupMe, and Google Drive to keep track of classes?
                        </h1>
                        <p className="leading-normal text-2xl mb-2">
                            You won't have to for long. Click the button to get notified when we drop.
                        </p>
                        <a href="https://forms.gle/69rUu5j2ryVajxCz5"
                           className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Get notified
                        </a>
                    </div>
                    {/*right col*/}
                    <div className="w-auto md:w-3/5 py-6 text-center pl-3">
                        <img className="w-auto md:w-4/5 z-50" src="/hero.png"/>
                    </div>
                </div>
            </div>
        </body>
    );
};