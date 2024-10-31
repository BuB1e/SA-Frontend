import { Link } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import DragDrop from "~/components/dragdrop";
import Supplier from "~/models/supplier";
import { DOMAIN } from "~/server/domain";

export default function CreateFormView() {
  const [supplierName, setSupplierName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [isSignUploaded, setIsSignUploaded] = useState(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [selectedSupplier, setSelectedSupplier] = useState<string>("");

  const [fetching, setFetching] = useState<boolean>(false);
  const [supplier, setSupplier] = useState<Supplier[]>([]);

  async function fetchSupplier() {
    const response = await fetch(DOMAIN + "/supplier/getAllSupplier");
    const data: Supplier[] = await response.json();
    setSupplier(data);
  }

  useEffect(() => {
    fetchSupplier();
  }, []);

  useEffect(() => {
    async function fetchData(
      price: string,
      unit: string,
      supplierName: string,
      supplierList: Supplier[]
    ) {
      const sendData = {
        method: "POST",
        url: DOMAIN + "/quotation/post",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          price: parseInt(price),
          unit: parseInt(unit),
          // supplier_id: supplierList.find(
          //   (supplier) => supplier.supplier_name === supplierName
          // )?.supplier_id,
          supplier_id: supplierList.find((supplier) => supplier.supplier_name === selectedSupplier)?.supplier_id,
          factory_sign: "suppXX.png",
          status: "Considered",
        }),
      };

      try {
        const { data } = await axios.request(sendData);
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
      }
    }

    if (fetching) {
      fetchData(price, unit, supplierName, supplier);
    }
  }, [fetching]);

  useEffect(() => {
    const isValid =
      supplierName.trim() !== "" &&
      price.trim() !== "" &&
      unit.trim() !== "" &&
      isSignUploaded;
    setIsFormValid(isValid);
  }, [supplierName, price, unit, isSignUploaded]);

  return (
    <div className="flex flex-col justify-center items-center p-10 bg-white w-svw h-auto overflow-auto">
      <div className="flex flex-col space-y-2 justify-center items-center w-[600px]">
        <h2 className="text-black text-lg">Supplier Name</h2>
        {/* <CustomTextBox
          type="text"
          text="Supplier Name"
          state={setSupplierName}
        /> */}
        {supplier.length > 0 ? 
        <select className="w-full bg-white border-2 border-green-600 h-12 rounded-xl px-4 py-2 text-black/80"
        onChange={(e)=>{
          setSelectedSupplier(e.currentTarget.value)
          setSupplierName(e.currentTarget.value)
          }}>
          {supplier.map((supplier) => (
            <option value={supplier.supplier_name}>{supplier.supplier_name}</option>
          ))}
        </select> : ""}
        <h2 className="text-black text-lg">Price</h2>
        <CustomTextBox type="text" text="Price" state={setPrice} />
        <h2 className="text-black text-lg">Unit</h2>
        <CustomTextBox type="text" text="Unit" state={setUnit} />
        <h2 className="text-black text-lg">Signature</h2>
        <DragDrop onUpload={setIsSignUploaded} />
        <div className="flex flex-row space-x-4">
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
            route="/status"
          />
        </div>
      </div>
    </div>
  );
}
