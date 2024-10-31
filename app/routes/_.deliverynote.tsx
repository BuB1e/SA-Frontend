import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import DeliveryNote from "~/models/delivery_note";
import Quotation from "~/models/quotation";
import Supplier from "~/models/supplier";
import { DOMAIN } from "~/server/domain";

export default function DeliveryNoteView() {
  interface DeliverChart {
    id: number;
    quotation_id : number;
    supplier: string;
    unit: number;
    price: number;
    total: number;
  }

  const [rows, setRows] = useState<DeliverChart[]>([]);
  const [deliveryNote, setDeliveryNote] = useState<DeliveryNote[]>([]);
  const [quotation, setQuotation] = useState<Quotation[]>([]);
  const [supplier, setSupplier] = useState<Supplier[]>([]);

  async function fetchDeliveryNote() {
    const response = await fetch(DOMAIN + "/delivery/getAllDeliveryNote");
    const data: DeliveryNote[] = await response.json();
    setDeliveryNote(data);
  }

  async function fetchQuotation() {
    const response = await fetch(DOMAIN + "/quotation/getAllQuotation");
    const data: Quotation[] = await response.json();
    setQuotation(data);
  }

  async function fetchSupplier() {
    const response = await fetch(DOMAIN + "/supplier/getAllSupplier");
    const data: Supplier[] = await response.json();
    setSupplier(data);
  }

  useEffect(() => {
    fetchDeliveryNote();
    fetchQuotation();
    fetchSupplier();
  }, []);

  useEffect(() => {
    if(deliveryNote.length > 0 && supplier.length > 0 && quotation.length > 0){
        let temp: DeliverChart[] = [];
        deliveryNote.forEach((delivery) => {
            let quotation_id = delivery.quotation_id;
            let select_quotaion = quotation.find((q) => q.id === quotation_id);
            let select_supplier = supplier.find((s) => s.supplier_id === select_quotaion?.supplier_id);

            let newRow : DeliverChart = {
                id: delivery.id,
                quotation_id: select_quotaion!.id,
                supplier: select_supplier?.supplier_name ?? "",
                unit: select_quotaion?.unit ?? 0,
                price: select_quotaion?.price ?? 0,
                total: select_quotaion?.total_price ?? 0,
            }
            temp.push(newRow);
        });
        setRows(temp);
    }
  }, [deliveryNote, supplier, quotation]);

  let columns = [
    { field: "id", headerName: "Delivery Note ID", flex: 1 },
    { field: "quotation_id", headerName: "Quotation ID", flex: 1 },
    { field: "supplier", headerName: "Supplier", flex: 1 },
    { field: "unit", headerName: "Unit", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "total", headerName: "Total Price", flex: 1 },
  ];
  const navigate = useNavigate();
  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    const query = createSearchParams(params.row).toString();
    navigate(`/deliverynotedetail?${query}`);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-10 w-svw h-auto overflow-auto">
      <h1 className="text-black text-[36px] font-bold">Delivery Note</h1>

      <section
        id="DataGrid"
        style={{
          height: "80%",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <DataGrid
          onRowClick={handleEvent}
          rows={rows}
          columns={columns}
          sx={{ backgroundColor: "#FFFFFF" }}
          className="[&>*]:font-urbanist [&>*]:font-bold"
        />
      </section>
    </div>
  );
}
