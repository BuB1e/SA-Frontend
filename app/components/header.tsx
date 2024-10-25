import { Link } from "@remix-run/react";
import { useState } from "react";
import RouteButton from "./route_button";

export default function Header() {
    const [select, setSelect] = useState("");
    return (
        // Home
        <div className="fixed top-0 left-0 z-50 overflow-hidden flex flex-col md:flex-row w-svw h-auto justify-end items-center bg-blue-600 drop-shadow-xl px-2 md:px-12 py-4">
            
            {/* Text Buttons */}
            <div className="justify-evenly items-center space-x-10 md:space-x-32">
                <RouteButton text="Create Form" destination="/" setSelect={setSelect} select={select}/>
                <RouteButton text="Status" destination="/" setSelect={setSelect} select={select}/>
                <RouteButton text="History" destination="/" setSelect={setSelect} select={select}/>
                <RouteButton text="Log out" destination="login" setSelect={setSelect} select={select}/>
            </div>
        </div>
    );
}