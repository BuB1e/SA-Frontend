import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import DeliveryNote from "~/models/delivery_note";
import Quotation from "~/models/quotation";
import Supplier from "~/models/supplier";
import { DOMAIN } from "~/server/domain";

export default function Template() {
  interface DeliveryNoteChart {
    id: number;
    unit: number;
    price: number;
    purchase_date: string | RegExpMatchArray;
  }
  const { id } = useParams();
  const [delivery, setDelivery] = useState<DeliveryNote>();
  const [quotation, setQuotation] = useState<Quotation>();
  const [supplier, setSupplier] = useState<Supplier>();
  const [rows, setRows] = useState<DeliveryNoteChart[]>([]);

  let columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "unit", headerName: "Unit", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "purchase_date", headerName: "Purchase Date", flex: 1 },
  ];

  async function fetchDelivery() {
    const response = await fetch(`${DOMAIN}/delivery/getNoteByID`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(id || "") }),
    });
    const data = await response.json();
    setDelivery(data);
  }

  async function fetchQuotation() {
    const response = await fetch(`${DOMAIN}/quotation/getByID`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: delivery?.quotation_id }),
    });
    const data = await response.json();
    setQuotation(data);
  }

  async function fetchSupplier() {
    const response = await fetch(`${DOMAIN}/supplier/getByID`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ supplier_id: quotation?.supplier_id }),
    });
    const data = await response.json();
    setSupplier(data);
  }

  useEffect(() => {
    fetchDelivery();
  }, []);

  useEffect(() => {
    if (delivery) {
      fetchQuotation();
    }
  }, [delivery]);

  useEffect(() => {
    if (quotation) {
      fetchSupplier();
      let temp: DeliveryNoteChart[] = [];
      let newRow: DeliveryNoteChart = {
        id: delivery?.id || 0,
        unit: quotation?.unit || 0,
        price: quotation?.price || 0,
        purchase_date: new Date(delivery?.purchase_date || "")
          .toUTCString()
          .match("[A-Za-z]*, [0-9]* [A-Za-z]* [0-9]*") || [""],
      };
      temp.push(newRow);
      setRows(temp);
    }
  }, [quotation]);

  return (
    <div className="flex flex-col  w-svw h-screen justify-center items-center bg-white">
      <div className="flex flex-col w-svw h-swh p-20 gap-5">
        <div className="flex flex-row w-full items-center justify-between">
          <h1 className="font-bold font-urbanist text-5xl text-black">
            {supplier?.supplier_name}
          </h1>
          <h1 className="font-bold font-urbanist text-5xl text-black">Delivery Note</h1>
        </div>

        <div className="flex flex-row w-full justify-between">
          <div>
            <h1 className="font-bold font-urbanist text-black">Delivery to : </h1>
            <h1 className="font-urbanist text-black">
              76 Moo 6, Nuea Khlong - Khao Phanom Road - Krabi 81140
            </h1>
          </div>

          <div>
            <div className="flex flex-row w-full gap-2 items-end justify-end">
              <h1 className="font-bold text-end font-urbanist text-black">
                Order Number :{" "}
              </h1>
              <h1 className="text-end font-urbanist text-black">{quotation?.id}</h1>
            </div>
            <div className="flex flex-row w-full gap-2 items-end justify-end">
              <h1 className="font-bold text-end font-urbanist text-black">Date Sent :</h1>
              <h1 className=" text-end font-urbanist text-black">
                {new Date(delivery?.purchase_date || "")
                  .toUTCString()
                  .match("[A-Za-z]*, [0-9]* [A-Za-z]* [0-9]*")}
              </h1>
            </div>
            <div className="flex flex-row w-full gap-2 items-end justify-end">
              <h1 className="font-bold text-end font-urbanist text-black">
                Contact Person :
              </h1>
              <h1 className=" text-end font-urbanist text-black">
                {delivery?.reciever_name}
              </h1>
            </div>
          </div>
        </div>

        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ backgroundColor: "#FFFFFF" }}
          className="[&>*]:font-urbanist [&>*]:font-bold"
          hideFooter
        />

        <div className="flex flex-row justify-end gap-2">
          <h1 className="font-bold font-urbanist text-black">Total Price : </h1>
          <h1 className="font-urbanist text-black">{quotation?.total_price} Baht</h1>
        </div>

        <img
          className="self-end"
          src={"https://cdn.prakasitj.com/proxy/get/"+quotation?.supplier_sign}
          width="150px"
          height="150px"
        />
      </div>
    </div>
  );
}
