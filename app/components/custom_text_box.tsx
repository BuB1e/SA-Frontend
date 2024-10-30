import { ChangeEventHandler } from "react";

interface props {
    type : string,
    text : string,
    value? : string;
    onChange? : ChangeEventHandler<HTMLInputElement>;
}

export default function CustomTextBox({type, text, value, onChange} : props) {
    var border = "black";
   ( value == "") ? border = "red-600" : "black"

    return(
        <input 
            onChange={onChange}
            type={type}
            placeholder={text}
            className={`w-full bg-white border-2 border-${border} h-12 rounded-xl px-4 py-2 text-black/80 focus:outline-none focus:border-green-600`}
            value={value}
        />
    );
}