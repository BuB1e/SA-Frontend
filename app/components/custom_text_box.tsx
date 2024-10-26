interface props {
    type : string,
    text : string,
}

export default function CustomTextBox({type, text} : props) {
    return(
        <input 
            type={type}
            placeholder={text}
            className="w-full bg-white border-2 border-black h-12 rounded-xl px-4 py-2 text-black/80 focus:outline-none focus:border-green-600" 
        />
    );
}