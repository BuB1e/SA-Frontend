import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import DeliveryNote from "~/models/delivery_note";
import Quotation from "~/models/quotation";
import Supplier from "~/models/supplier";
import User from "~/models/user";
import { DOMAIN } from "~/server/domain";

export default function HistoryView() {

    interface HistoryChart {
        id: number;
        supplier: string;
        unit: number;
        price: number;
        total: number;
        purchase_date : string;
      }
    
      const [rows, setRows] = useState<HistoryChart[]>([]);
      const [deliveryNote, setDeliveryNote] = useState<DeliveryNote[]>([]);
      const [quotation, setQuotation] = useState<Quotation[]>([]);
      const [supplier, setSupplier] = useState<Supplier[]>([]);
      const [headerName, setHeaderName] = useState("");
      const [role, setRole] = useState<string>("");

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
        setRole(sessionStorage.getItem("role") ?? "");
        fetchDeliveryNote();
        fetchQuotation();
        fetchSupplier();
      }, []);
    
      useEffect(() => {
        if(deliveryNote.length > 0 && supplier.length > 0 && quotation.length > 0) {
            let temp: HistoryChart[] = [];
            console.table(deliveryNote);
            deliveryNote.forEach((delivery) => {
                let quotation_id = delivery.quotation_id;
                let select_quotaion = quotation.find((q) => q.id === quotation_id);
                let select_supplier = supplier.find((s) => s.supplier_id === select_quotaion?.supplier_id);
                let newRow : HistoryChart = {
                    id: delivery.id,
                    supplier: select_supplier?.supplier_name ?? "",
                    unit: select_quotaion?.unit ?? 0,
                    price: select_quotaion?.price ?? 0,
                    total: select_quotaion?.total_price ?? 0,
                    purchase_date : new Date(delivery?.purchase_date).toUTCString()
                }
                setHeaderName("Supplier");
                temp.push(newRow);
            });
            setRows(temp);
        }
      }, [deliveryNote, supplier, quotation, role]);
    
    let columns: GridColDef<(typeof rows)[number]>[]  = [
        {field: 'id', headerName: 'Delivery Note ID', flex: 1},
        {field: 'supplier', headerName: role === "Supplier" ? "Receiver":"Supplier", flex: 1, valueGetter: (value, row) => role === "Factory" ? row.supplier : deliveryNote.find((d) => d.quotation_id === row.id)?.reciever_name},
        {field: 'unit', headerName: 'Unit', flex: 1},
        {field: 'price', headerName: 'Price', flex: 1},
        {field: 'total', headerName: 'Total Price', flex: 1},
        {field: 'purchase_date', headerName: 'Purchase Date', flex: 1, valueGetter: (value, row) => new Date(value).toUTCString().match("1970") !== null ? "Not Assign" : new Date(value).toLocaleString()},
    ];
    const navigate = useNavigate();
    const handleEvent: GridEventListener<'rowClick'> = (
        params, // GridRowParams
        event, // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
    ) => {
        const query = createSearchParams(params.row).toString();
        navigate(`/historydetail?${query}`)
    };

    return(
        <div className="flex flex-col justify-center items-center p-10 space-y-4 w-svw h-auto overflow-auto">
            <h1 className="text-black text-[36px] font-bold">History</h1>

            <section id="DataGrid" style={{ height: '80%', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <DataGrid onRowClick={handleEvent} rows={rows} columns={columns} sx={{backgroundColor: "#FFFFFF"}} className="[&>*]:font-urbanist [&>*]:font-bold"/>
            </section>
        </div>
    );
}