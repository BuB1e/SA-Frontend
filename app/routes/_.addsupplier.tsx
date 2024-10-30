import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";

export default function AddSupplierView() {
    const [supplierName, setSupplierName] = useState<string>("");
    const [taxNumber, setTaxNumber] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    useEffect(() => {
        const isValid =
          supplierName.trim() !== "" &&
          taxNumber.trim() !== "" &&
          username.trim() !== "" &&
          password.trim() !== "";
    
        setIsFormValid(isValid);
      }, [supplierName, taxNumber, username, password]);

    function generatePassword() {
        var randomString = Math.random().toString(36).slice(-8);
        setPassword(randomString);
    }

    function clearAll() {
        setSupplierName("");
        setTaxNumber("");
        setUsername("");
        setPassword("");
    }

    return(
        <div className="flex flex-col justify-center items-center p-10 bg-white w-svw h-auto overflow-auto">
            <div className="flex flex-col space-y-2 justify-center items-center w-[600px]">
                <h2 className="text-black text-lg">ชื่อบริษัท</h2>
                <CustomTextBox
                    type="text"
                    text="ชื่อบริษัท"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                />
                <h2 className="text-black text-lg">เลขที่เสียภาษี</h2>
                <CustomTextBox
                    type="text"
                    text="เลขที่เสียภาษี"
                    value={taxNumber}
                    onChange={(e) => setTaxNumber(e.target.value)}
                />
                <h2 className="text-black text-lg">Username</h2>
                <CustomTextBox
                    type="text"
                    text="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h2 className="text-black text-lg">Password</h2>
                <div className="flex flex-row space-x-4 w-fit h-fit">
                    <CustomTextBox
                        type="text"
                        text="Password"
                        value={password}
                    />
                    <CustomButton text="Generate" color="bg-button-green" click={generatePassword}/>
                </div>
                <div className="flex flex-row space-x-4 py-16">
                    <CustomButton text="Clear" color="bg-button-red" click={clearAll}/>
                    <CustomButton text="Create" color="bg-button-green" disabled={!isFormValid}/>
                </div>
            </div>
        </div>
    );
}