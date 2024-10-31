import { useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import DragDrop from "~/components/dragdrop";
import TextRow from "~/components/text_row";

export default function DeliveryNoteDetailView() {
    const [searchParams] = useSearchParams();

    // Access query parameters
    const id = searchParams.get('id');
    const product_unit = searchParams.get('unit');
    const price = searchParams.get('price');
    const total = Number(product_unit) * Number(price)
    const [name, setName] = useState("");
    useEffect(() => {
        fetch(`https://pdf-generator.prakasitj.com/deliverynote/`+id);
    },[]);
    return(
        <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10 w-svw h-auto overflow-auto">
            {/* Top */}
            <div className="flex flex-row px-0 py-0 space-x-4 w-full h-full items-center justify-center">
                {/* Left */}
                <div className="flex flex-col items-center px-40 py-20 justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full h-full">
                    <h1 className="font-bold underline text-[42px]">รายละเอียดสินค้า</h1>
                    <div className="flex flex-col w-full items-center justify-center space-y-2">
                        <TextRow topic="Unit" text={product_unit!} unit="กิโลกรัม"/>
                        <TextRow topic="Price" text={price!} unit="บาท/กิโลกรัม"/>
                        <TextRow topic="Total Price" text={String(total)} unit="บาท"/>
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col items-center px-40 py-20 justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-4 w-full h-full">
                    <div className="flex flex-col items-start space-y-2 py-14">
                        <h1 className="text-black font-bold text-[24px]">ชื่อผู้รับ :</h1>
                        <CustomTextBox type="text" text="ชื่อจริง - นามสกุล" state={setName}/>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="flex flex-col px-20 py-10 space-y-4 w-full items-center justify-center text-black rounded-xl bg-transparent border-4 border-black">
                <div className="flex flex-row justify-center items-center space-x-8 py-0 px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold underline text-[42px]">อัปโหลดลายเซ็น</h1>
                        <DragDrop id={id || ""} fileNames={"delivery-sign-"+id+".webp"} reciever_name={name} sign={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold underline text-[42px]">อัปโหลดสลิปใบเสร็จ</h1>
                        <DragDrop id={id || ""} fileNames={"delivery-reciept-"+id+".webp"} reciever_name={name} sign={false}/>
                    </div>
                </div>
                <div className="flex flex-row space-x-8">
                    <CustomButton text="Cancel" color="bg-button-red" route="/deliverynote"/>
                    <CustomButton text="Confirm" color="bg-button-green" route="/deliverynote"/>
                </div>
            </div>
        </div>
        
    );
}