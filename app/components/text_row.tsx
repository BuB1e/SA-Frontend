interface props {
    topic : string,
    text : string,
    unit? : string,
}

export default function TextRow({topic, text, unit} : props) {
    return(
        <div className="flex flex-row space-x-2">
            <h1 className="text-black font-bold text-[24px]">{topic} :</h1>
            <h1 className="text-black text-[24px]">{text} {unit}</h1>
        </div>
    );
}