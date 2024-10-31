import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import User from "~/models/user";
import { DOMAIN } from "~/server/domain";

export default function ChangePasswordView() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(DOMAIN + "/user/get");
      const data: User[] = await response.json();
      const username = await sessionStorage.getItem("username");
      const user = data.find((user) => user.username == username);
      setUser(user);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function changePassword() {
      if (!user) return;

      const options = {
        method: "PUT",
        url: "https://sa-db.prakasitj.com/user/put",
        headers: { "Content-Type": "application/json" },
        data: { old_username: user.username, password: newPassword},
      };

      try {
        const { data } = await axios.request(options);
        setSuccess(true);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (fetching) {
      changePassword();
      setFetching(false);
    }
  }, [isFormValid, fetching]);

  useEffect(() => {
    const isValid =
      oldPassword.trim() !== "" &&
      newPassword.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      newPassword == confirmPassword;

    setIsFormValid(isValid);
  }, [oldPassword, newPassword, confirmPassword]);

  return (
    <div className="flex flex-col justify-center items-center p-10 bg-white w-svw h-auto overflow-auto">
      <div className="flex flex-col space-y-2 justify-center items-center w-[600px]">
        <h2 className="text-black text-3xl font-bold underline">
          เปลี่ยนรหัสผ่าน
        </h2>
        <div className="flex flex-col py-8 space-y-10">
          <CustomTextBox
            type="text"
            text="Old Password"
            state={setOldPassword}
            onChange={(e) => {
                setSuccess(false);
                setOldPassword(e.target.value);
            }}
          />
          <CustomTextBox
            type="text"
            text="New Password"
            state={setNewPassword}
            onChange={(e) => {
                setSuccess(false);
                setNewPassword(e.target.value);
            }}
          />
          <CustomTextBox
            type="text"
            text="Confirm New Password"
            state={setConfirmPassword}
            onChange={(e) => {
                setSuccess(false);
                setConfirmPassword(e.target.value);
            }}
          />
        </div>
        {success && <h1 className="text-green-600 font-bold text-md">Password changed successfully!</h1>}
        <div className="flex flex-row space-x-4">
          <CustomButton
            text="Confirm"
            color="bg-button-green"
            disabled={!isFormValid}
            click={() => {
                setFetching(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
