import React from "react";
import Navbar from "../components/Navbar";
export default function Dashboard() {
    return (
        <>
            <div className="grow m-4 bg-white px-4 py-2 space-y-4 flex flex-col justify-items-center rounded-xl shadow-lg shadow-gray-400/20">
                <div className="flex flex-row shrink border-1 bg-white max-w-max p-5 ">
                <div className="mr-4">
                    <h1 className="text-5xl font-extrabold z-10 underline underline-offset-4 decoration-4 decoration-[hsl(var(--p))]">Dashboard</h1>

                </div>
                    <div className="divider lg:divider-horizontal"/>
                <div className="tabs ml-2">
                    <a className="tab tab-lg text-gray-500">My Feed</a>
                    <div className="divider divider-horizontal"/>
                    <a className="tab tab-lg tab-active font-bold text-primary">Inbox</a>
                        <div className="divider divider-horizontal"/>
                    <a className="tab tab-lg text-gray-500">Notifications</a>
                </div>
                </div>


            </div>


        </>
    )
}