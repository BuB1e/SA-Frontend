import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import DragDrop from "~/components/dragdrop";

export default function Payment() {
    return(
        <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10 w-svw h-[80%] overflow-auto">
            <div className="flex flex-col items-center px-40 py-20 justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full h-full">
                <h1 className="text-black text-xl">อัปโหลดสลิปใบเสร็จ</h1>
                <DragDrop/>
                <CustomButton text="Confirm" color="bg-button-green"/>
            </div>
        </div>
    );
}