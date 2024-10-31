import { ChangeEventHandler, Dispatch, LegacyRef, SetStateAction, useEffect, useRef, useState} from "react";

interface props {
    type : string,
    text : string,
    value? : string;
    state? : Dispatch<SetStateAction<string>>;
    onChange? : ChangeEventHandler<HTMLInputElement>;
}

export default function CustomTextBox({type, text, value, state, onChange} : props) {
    const [color, setColor] = useState<string>("");
    const inputRef = useRef<LegacyRef<HTMLInputElement> | undefined>();

    function onBlur(e:React.FocusEvent<HTMLInputElement, Element>) {
        if(e.target.value === "") {
            setColor("border-red-600");
        } else {
            setColor("border-green-600");
        }
        if(state) {
            state(e.target.value);
        }
    }

    return(
        <input
            id="input"
            onBlur={(e)=>{onBlur(e)}}
            onChange={onChange}
            type={type}
            placeholder={text}
            className={`w-full bg-white border-2 ${color} h-12 rounded-xl px-4 py-2 text-black/80 focus:outline-none focus:border-blue-600`}
            value={value}
        />
    );
}