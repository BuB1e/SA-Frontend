import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";

export default function ChangePasswordView() {
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    useEffect(() => {
        const isValid =
            oldPassword.trim() !== "" &&
            newPassword.trim() !== "" &&
            confirmPassword.trim() !== "";
    
        setIsFormValid(isValid);
      }, [oldPassword, newPassword, confirmPassword]);

    function clearAll() {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }

    return(
        <div className="flex flex-col justify-center items-center p-10 bg-white w-svw h-auto overflow-auto">
            <div className="flex flex-col space-y-2 justify-center items-center w-[600px]">
                <h2 className="text-black text-3xl font-bold underline">เปลี่ยนรหัสผ่าน</h2>
                <div className="flex flex-col py-8 space-y-10">
                    <CustomTextBox
                        type="text"
                        text="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <CustomTextBox
                        type="text"
                        text="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <CustomTextBox
                        type="text"
                        text="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-row space-x-4">
                    <CustomButton text="Confirm" color="bg-button-green" disabled={!isFormValid}/>
                </div>
            </div>
        </div>
    );
}