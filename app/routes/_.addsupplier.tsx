import axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import User from "~/models/user";
import { DOMAIN } from "~/server/domain";

export default function AddSupplierView() {
  const [supplierName, setSupplierName] = useState<string>("");
  const [taxNumber, setTaxNumber] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    if (fetching) {
      fetchDataUser(username, password);
      fetchUser();
    }
  }, [fetching, supplierName, taxNumber, username, password, user]);

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

  async function fetchDataUser(username: string, password: string) {
    const sendData = {
      method: "POST",
      url: DOMAIN + "/user/post",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        username: username,
        password: password,
        priority: 0,
      }),
    };

    try {
      const { data } = await axios.request(sendData);
      await fetchUser();
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  }

  async function fetchDataSupplier(
    supplierName: string,
    taxNumber: string,
    userId: string
  ) {
    const sendData = {
      method: "POST",
      url: DOMAIN + "/supplier/post",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        supplier_name: supplierName,
        tax_number: parseInt(taxNumber),
        user_id: userId,
      }),
    };

    try {
      const { data } = await axios.request(sendData);
      console.log(supplierName, parseInt(taxNumber), userId);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  }

  async function fetchUser() {
    const response = await fetch(DOMAIN + "/user/get");
    const data: User[] = await response.json();
    setUser(data);
    let tempUuid = await data.find((user) => user.username == username)?.uuid;
    await fetchDataSupplier(supplierName, taxNumber, tempUuid || "");
    setSuccess(true);
  }

  return (
    <div className="flex flex-col justify-center items-center p-10 bg-white w-svw h-auto overflow-auto">
      <div className="flex flex-col space-y-2 justify-center items-center w-[600px]">
        <h2 className="text-black text-lg">ชื่อบริษัท</h2>
        <CustomTextBox
          type="text"
          text="ชื่อบริษัท"
          state={setSupplierName}
          onChange={(e) => setSupplierName(e.target.value)}
        />
        <h2 className="text-black text-lg">เลขที่เสียภาษี</h2>
        <CustomTextBox
          type="text"
          text="เลขที่เสียภาษี"
          state={setTaxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}
        />
        <h2 className="text-black text-lg">Username</h2>
        <CustomTextBox
          type="text"
          text="Username"
          state={setUsername}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2 className="text-black text-lg">Password</h2>
        <div className="flex flex-row space-x-4 w-fit h-fit">
          <CustomTextBox type="text" text="Password" value={password} />
          <CustomButton
            text="Generate"
            color="bg-button-green"
            click={generatePassword}
          />
        </div>
        {success && <h1 className="text-green-600 font-bold text-md">Create new supplier success</h1>}
        <div className="flex flex-row space-x-4 py-16">
          <CustomButton
            text="Clear"
            color="bg-button-red"
            click={() => {
              window.location.reload();
            }}
          />
          <CustomButton
            text="Create"
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
