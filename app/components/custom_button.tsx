import { Link } from "@remix-run/react"

interface props {
    text : string,
    color : string,
    textColor? : string,
    route? : string,
}

export default function CustomButton({text, color, textColor, route} : props) {
    return(
        <Link to={route ?? ""}>
            <button type="button" className={`${color} active:brightness-[80%] hover:brightness-[110%] hover:scale-110 duration-200 space-x-2 text-${textColor ?? "black"} shadow-lg rounded-2xl text-2xl justify-center items-center w-fit h-fit px-6 py-2`}>
                <h1 className="items-center">{text}</h1>
            </button>
        </Link>
    );
}