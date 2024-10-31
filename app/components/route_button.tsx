import { Link, Route } from "@remix-run/react";
import { Dispatch, SetStateAction, useEffect } from "react";

interface props {
    text: string;
    destination: string;
    setSelect: Dispatch<SetStateAction<string>>;
    select: string;
}

export default function RouteButton({text, destination, select, setSelect} : props) {
    return(
        <Link to={destination} prefetch="intent">
            <button onClick={()=>{setSelect(text)}} type="button" className={`hover:scale-110 duration-200 text-white font-extrabold text-2xl select-none ${select===text?"underline":""}`}>{text}</button>
        </Link>
    );
}