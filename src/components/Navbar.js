import React from "react";

const navigation = [
    { name: 'MATH 32A', color: "text-red-700" },
    { name: 'EPS SCI 3', color: "text-blue-700" },
    { name: 'CS 31', color: "text-green-700" },
    { name: 'CS 1', color: "text-green-700" },
    { name: 'LING 1', color: "text-blue-700" },
    { name: 'SCAND 20', color: "text-red-700" },
]

export default function Navbar() {
    return (

        <div className="">
            <ul className="menu bg-base-100 w-56 pt-2 px-2 flex flex-1 flex-col text-lg overflow-x-hidden my-4 ml-4 h-[calc(100vh-2rem)] rounded-xl shadow-lg shadow-gray-400/20">
                <li className="w-2/3 mx-auto rounded-r-lg">
                    <a>
                        <img className="max-width-" src="/uclass.png" alt="image" />

                    </a>
                </li>
                <div className="divider mx-2 my-0" />
                <li className="font-bold text-primary-focus rounded-r-lg">
                    <a className="rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard

                    </a>
                </li>
                <li>
                    <a className="group rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Search

                    </a>
                </li>
                <li>
                    <a className="rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Messages
                    </a>
                </li>


                {/*<div tabIndex="0" className="collapse">*/}
                <div className="divider mx-2 font-semibold">Classes</div>
                <div className="mx-0 p-0">
                    {navigation.map(item =>
                        <li className={"font-semibold rounded-r-lg "}>
                            {/* + (item.color)}*/}
                            <a className="rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                {item.name}
                            </a>
                        </li>
                    )}
                </div>
                {/*</div>*/}
            </ul>
        </div>
    );
}