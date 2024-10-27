import { Link } from "@remix-run/react";
import { useState } from "react";
import RouteButton from "./route_button";

export default function Header() {
    const [select, setSelect] = useState("");
    return (
        // Home
        <div className="fixed top-0 left-0 z-50 overflow-hidden flex flex-col md:flex-row w-svw h-auto justify-end items-center bg-blue-600 drop-shadow-xl px-2 md:px-12 py-4">
            
            {/* Text Buttons */}
            <div className="flex flex-row justify-end items-center space-x-10 md:space-x-32">
                <RouteButton text="Confirmation" destination="confirmation" setSelect={setSelect} select={select}/>
                <RouteButton text="Create Form" destination="createform" setSelect={setSelect} select={select}/>
                <RouteButton text="Status" destination="status" setSelect={setSelect} select={select}/>
                <RouteButton text="Delivery Note" destination="deliverynote" setSelect={setSelect} select={select}/>
                <RouteButton text="History" destination="/" setSelect={setSelect} select={select}/>
                <Link to="login">
                    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796" 
                                stroke="#ffffff" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round">
                            </path> 
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    );
}