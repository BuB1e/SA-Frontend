import { useSearchParams } from "@remix-run/react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import DragDrop from "~/components/dragdrop";
import TextRow from "~/components/text_row";

export default function ConfirmationDetailView() {
    const [searchParams] = useSearchParams();

    // Access query parameters
    const id = searchParams.get('id');
    const product_unit = searchParams.get('unit');
    const price = searchParams.get('price');
    const total = searchParams.get('total');
    const status = searchParams.get('status');
    console.log("{ ID : " + id);
    console.log("UNIT : " + product_unit);
    console.log("PRICE : " + price);
    console.log("TOTAL : " + total + " }");
    if(status == "Considered") {
        return(
            <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10  w-svw h-auto overflow-auto">
                {/* Top */}
                <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
                    <h1 className="font-bold underline text-[42px]">รายละเอียดสินค้า</h1>
                    <div className="flex flex-col w-full items-center justify-center space-y-2">
                        <TextRow topic="ID" text={id!}/>
                        <TextRow topic="Unit" text={product_unit!} unit="กิโลกรัม"/>
                        <TextRow topic="Price" text={price!} unit="บาท/กิโลกรัม"/>
                        <TextRow topic="Total Price" text={total!} unit="บาท"/>
                    </div>
                </div>
                {/* Bottom */}
                <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
                    <h1 className="font-bold underline text-[42px]">ยอมรับใบเสนอสินค้า ?</h1>
                    <div className="flex flex-row h-full items-center justify-center space-x-6">
                        <CustomButton text="Decline" color="bg-button-red"/>
                        <CustomButton text="Confirm" color="bg-button-green"/>
                    </div>
                </div>
            </div>
        );
    } else if (status == "Accept") {
        return(
            <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10 w-svw h-[80%] overflow-auto">
                {/* Top ( Information ) */}
                <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
                    <h1 className="font-bold underline text-[42px]">รายละเอียดสินค้า</h1>
                    <div className="flex flex-col w-full items-center justify-center space-y-2">
                        <TextRow topic="ID" text={id!}/>
                        <TextRow topic="Unit" text={product_unit!} unit="กิโลกรัม"/>
                        <TextRow topic="Price" text={price!} unit="บาท/กิโลกรัม"/>
                        <TextRow topic="Total Price" text={total!} unit="บาท"/>
                    </div>
                </div>
                <div className="flex flex-col px-20 py-10 space-y-4 w-full items-center justify-center text-black rounded-xl bg-transparent border-4 border-black">
                    <div className="flex flex-col items-start space-y-2">
                        <h1 className="text-black font-bold text-[24px]">ชื่อผู้ส่ง :</h1>
                        <CustomTextBox type="text" text="ชื่อจริง - นามสกุล"/>
                    </div>
                    <CustomButton text="Create" color="bg-button-green" route="/confirmation"/>
                </div>
            </div>
        );
    } 
}