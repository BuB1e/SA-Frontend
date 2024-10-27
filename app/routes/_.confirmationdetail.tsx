import { useSearchParams } from "@remix-run/react";
import CustomButton from "~/components/custom_button";
import TextRow from "~/components/text_row";

export default function ConfirmationDetail() {
    const [searchParams] = useSearchParams();

    // Access query parameters
    const id = searchParams.get('id');
    const product_unit = searchParams.get('unit');
    const price = searchParams.get('price');
    const total = searchParams.get('total');
    console.log("{ ID : " + id);
    console.log("UNIT : " + product_unit);
    console.log("PRICE : " + price);
    console.log("TOTAL : " + total + " }");
    return(
        <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10 w-svw h-[80%]">
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
}