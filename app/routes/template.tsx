import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import DeliveryNote from "~/models/delivery_note";
import { DOMAIN } from "~/server/domain";

export default function Template() {
  const { id } = useParams();

  const [delivery, setDelivery] = useState<DeliveryNote>();
  async function getData() {
    const response = await fetch(`${DOMAIN}/delivery/getNoteByID`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(id || "") }),
    });
    const data = await response.json();
    setDelivery(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-svw h-swh">
      <div className="flex flex-row w-full">
        <h1 className="">Palm Inc.</h1>
        <h1>Delivery Note</h1>
      </div>
    </div>
  );
}
