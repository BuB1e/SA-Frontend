import { Link } from "@remix-run/react"
import { MouseEventHandler } from "react";

interface props {
    text : string,
    color : string,
    textColor? : string,
    route? : string,
    click? : MouseEventHandler<HTMLButtonElement>;
    disabled? : boolean;
}

export default function CustomButton({text, color, textColor, route, click, disabled} : props) {
    
    if (disabled == true) {
        color = "bg-gray-400"
    }

    return(
        <Link to={route ?? ""}>
            <button type="button" onClick={click} disabled={disabled} className={`${color} active:brightness-[80%] hover:brightness-[110%] hover:scale-110 duration-200 space-x-2 text-${textColor ?? "black"} shadow-lg rounded-2xl text-2xl justify-center items-center w-fit h-fit px-6 py-2`}>
                <h1 className="items-center">{text}</h1>
            </button>
        </Link>
    );
}