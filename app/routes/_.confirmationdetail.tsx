import { useSearchParams } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CustomButton from "~/components/custom_button";
import CustomTextBox from "~/components/custom_text_box";
import DragDrop from "~/components/dragdrop";
import TextRow from "~/components/text_row";
import { DOMAIN } from "~/server/domain";

export default function ConfirmationDetailView() {
  const [searchParams] = useSearchParams();
  const [sender_name, setSenderName] = useState("");
  // Access query parameters
  const id = searchParams.get("id");
  const product_unit = searchParams.get("unit");
  const price = searchParams.get("price");
  const total = searchParams.get("total_price");
  const status = searchParams.get("status");
  const [success, setSuccess] = useState(false);
  const [accept, setAccept] = useState(false);
  const [decline, setDecline] = useState(false);

  useEffect(() => {
    if (!success) return;
    async function fetchDelivery() {
      const respone = await fetch(DOMAIN + "/delivery/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quotation_id: parseInt(id || ""),
          sender_name: sender_name,
        }),
      });
      await fetch("https://pdf-generator.prakasitj.com/deliverynote/" + id);
    }
    fetchDelivery();
    setSuccess(false);
  }, [success]);

  useEffect(() => {
    if (!accept) return;
    async function fetchAcceptQuotation() {
      const options = {
        method: "PUT",
        url: "https://sa-db.prakasitj.com/quotation/put",
        headers: { "Content-Type": "application/json" },
        data: { id: parseInt(id || ""), status: "Accept" },
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAcceptQuotation();
    setAccept(false);
  }, [accept]);

  useEffect(() => {
    if (!decline) return;
    async function fetchDeclineQuotation() {
      const options = {
        method: "PUT",
        url: "https://sa-db.prakasitj.com/quotation/put",
        headers: { "Content-Type": "application/json" },
        data: { id: parseInt(id || ""), status: "Reject" },
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeclineQuotation();
    setDecline(false);
  }, [decline]);

  if (status == "Considered") {
    return (
      <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10  w-svw h-auto overflow-auto">
        {/* Top */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
          <h1 className="font-bold underline text-[42px]">รายละเอียดสินค้า</h1>
          <div className="flex flex-col w-full items-center justify-center space-y-2">
            <TextRow topic="ID" text={id!} />
            <TextRow topic="Unit" text={product_unit!} unit="กิโลกรัม" />
            <TextRow topic="Price" text={price!} unit="บาท/กิโลกรัม" />
            <TextRow topic="Total Price" text={total!} unit="บาท" />
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
          <h1 className="font-bold underline text-[42px]">
            ยอมรับใบเสนอสินค้า ?
          </h1>
          <div className="flex flex-row h-full items-center justify-center space-x-6">
            <CustomButton
              text="Decline"
              color="bg-button-red"
              route="/confirmation"
              click={() => {
                setDecline(true);
              }}
            />
            <CustomButton
              text="Confirm"
              color="bg-button-green"
              route="/confirmation"
              click={() => {
                setAccept(true);
              }}
            />
          </div>
        </div>
      </div>
    );
  } else if (status == "Accept") {
    return (
      <div className="flex flex-col items-center justify-center bg-white px-10 py-10 space-y-10 w-svw h-auto overflow-auto">
        {/* Top ( Information ) */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border-4 border-black text-black space-y-6 w-full py-20">
          <h1 className="font-bold underline text-[42px]">รายละเอียดสินค้า</h1>
          <div className="flex flex-col w-full items-center justify-center space-y-2">
            <TextRow topic="ID" text={id!} />
            <TextRow topic="Unit" text={product_unit!} unit="กิโลกรัม" />
            <TextRow topic="Price" text={price!} unit="บาท/กิโลกรัม" />
            <TextRow topic="Total Price" text={total!} unit="บาท" />
          </div>
        </div>
        <div className="flex flex-col px-20 py-10 space-y-4 w-full items-center justify-center text-black rounded-xl bg-transparent border-4 border-black">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="text-black font-bold text-[24px]">ชื่อผู้ส่ง :</h1>
            <CustomTextBox
              type="text"
              text="ชื่อจริง - นามสกุล"
              state={setSenderName}
            />
          </div>
          <CustomButton
            text="Create"
            color="bg-button-green"
            route="/confirmation"
            click={() => {
              setSuccess(true);
            }}
          />
        </div>
      </div>
    );
  }
}
