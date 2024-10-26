import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import DragDrop from "~/components/dragdrop";

export default function CreateForm() {
    return(
        <div className="flex flex-col justify-center items-center bg-white w-svw h-[80%]">
            <div className="flex flex-col space-y-2 justify-center items-center w-[600px]">
                <h2 className="text-black text-lg">Supplier Name</h2>
                <CustomTextBox type="text" text="Supplier Name"/>
                <h2 className="text-black text-lg">Price</h2>
                <CustomTextBox type="text" text="Price"/>
                <h2 className="text-black text-lg">Unit</h2>
                <CustomTextBox type="text" text="Unit"/>
                <h2 className="text-black text-lg">Signature</h2>
                <DragDrop/>
                <div className="flex flex-row space-x-4">
                    <CustomButton text="Clear" color="bg-button-red"/>
                    <CustomButton text="Create" color="bg-button-green"/>
                </div>
            </div>
        </div>
    );
}