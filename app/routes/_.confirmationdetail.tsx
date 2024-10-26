import CustomButton from "~/components/custom_button";
import TextRow from "~/components/text_row";

export default function ConfirmationDetail() {
    return(
        <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10 w-svw h-[80%]">
            {/* Top */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
                <h1 className="font-bold underline text-[42px]">รายละเอียดสินค้า</h1>
                <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <TextRow topic="ID" text="xxxxx"/>
                    <TextRow topic="Unit" text="xxxxx" unit="กิโลกรัม"/>
                    <TextRow topic="Price" text="xxxxx" unit="บาท/กิโลกรัม"/>
                    <TextRow topic="Total Price" text="xxxxx" unit="บาท"/>
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