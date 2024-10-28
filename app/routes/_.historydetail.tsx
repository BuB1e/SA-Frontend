export default function HistoryDetail() {
    return(
        <div className="flex flex-row w-svw bg-white px-10 py-10 space-x-10 justify-center items-center overflow-auto">
            {/* Delivery Note */}
            <div className="flex flex-col justify-center items-center w-[590px] h-[900px] space-y-4">
                <h1 className="text-black font-bold text-3xl">Delivery Note</h1>
                <img src="https://cdn.prakasitj.com/proxy/get/delivery-note-example.png" alt="" className="w-full border-4 border-black"/>
            </div>
            {/* Receipt */}.
            <div className="flex flex-col justify-center items-center w-[590px] h-[900px] space-y-4">
                <h1 className="text-black font-bold text-3xl">Receipt</h1>
                <img src="https://cdn.prakasitj.com/proxy/get/receipt_example.jpg" alt="" className="w-full border-4 border-black"/>
            </div>
        </div>
    );
}