import { ChangeEventHandler, useState } from "react";

interface props {
    type : string,
    text : string,
    value? : string;
    onChange? : ChangeEventHandler<HTMLInputElement>;
}

export default function CustomTextBox({type, text, value, onChange} : props) {
    const [color, setColor] = useState<string>("");
    function onBlur() {
        if(value === "") {
            setColor("border-red-600");
        } else {
            setColor("border-green-600");
        }
    }

    return(
        <input
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            placeholder={text}
            className={`w-full bg-white border-2 ${color} h-12 rounded-xl px-4 py-2 text-black/80 focus:outline-none focus:border-blue-600`}
            value={value}
        />
    );
}