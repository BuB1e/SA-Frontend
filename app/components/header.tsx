import { Link } from "@remix-run/react";
import { useState } from "react";
import RouteButton from "./route_button";

export default function Header() {
    const [select, setSelect] = useState("");
    return (
        // Home
        <div className="fixed top-0 left-0 z-50 overflow-hidden flex flex-col md:flex-row w-svw h-auto justify-between items-center bg-blue-600 drop-shadow-xl px-2 md:px-12 py-4">
            <Link onClick={()=>{setSelect("home")}} to="/" className="flex flex-col items-center">
                <svg className="hover:scale-110 duration-200" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 22V9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 9.5V13.5M20 22V17.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
            </Link>
            
            {/* Text Buttons */}
            <div className="flex flex-row justify-end items-center space-x-10 md:space-x-32">
                <RouteButton text="Confirmation" destination="confirmation" setSelect={setSelect} select={select}/>
                <RouteButton text="Status" destination="status" setSelect={setSelect} select={select}/>
                <RouteButton text="Delivery Note" destination="deliverynote" setSelect={setSelect} select={select}/>
                <RouteButton text="History" destination="history" setSelect={setSelect} select={select}/>
                <RouteButton text="Create Form" destination="createform" setSelect={setSelect} select={select}/>
                <RouteButton text="Suppliers" destination="suppliers" setSelect={setSelect} select={select}/>
                <RouteButton text="Change Password" destination="changepassword" setSelect={setSelect} select={select}/>
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