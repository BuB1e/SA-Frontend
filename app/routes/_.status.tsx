import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import Quotation from "~/models/quotation";
import Supplier from "~/models/supplier";
import { DOMAIN } from "~/server/domain";

export default function StatusView() {
    interface StatusChart {
        id: number;
        unit: number;
        price: number;
        total: number;
        supplier: string;
        creation_date: string;
        status: string;
      }
    
      const [rows, setRows] = useState<StatusChart[]>([]);
      const [quotation, setQuotation] = useState<Quotation[]>([]);
      const [supplier, setSupplier] = useState<Supplier[]>([]);
    
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
        fetchQuotation();
        fetchSupplier();
      }, []);
    
      useEffect(() => {
        if(supplier.length > 0 && quotation.length > 0){
            let temp: StatusChart[] = [];
            quotation.forEach((quotation) => {
                let select_supplier = supplier.find((s) => s.supplier_id === quotation.supplier_id);

                let newRow : StatusChart = {
                    id: quotation.id,
                    unit: quotation.unit ?? 0,
                    price: quotation.price ?? 0,
                    total: quotation.total_price ?? 0,
                    supplier: select_supplier?.supplier_name ?? "",
                    creation_date: new Date(quotation.creation_date).toUTCString() ?? "",
                    status: quotation.status ?? "",
                }
                temp.push(newRow);
            });
            setRows(temp);
        }
      }, [supplier, quotation]);

    let columns: GridColDef<(typeof rows)[number]>[] = [
        {field: 'id', headerName: 'Quotation ID', flex: 1},
        {field: 'unit', headerName: 'Unit', flex: 1},
        {field: 'price', headerName: 'Price', flex: 1},
        {field: 'total', headerName: 'Total Price', flex: 1},
        {field: 'supplier', headerName: 'Supplier', flex: 1},
        {field: 'creation_date', headerName: 'Creation Date', flex: 1},
        {field: 'status', headerName: 'Status', flex: 1},
    ];
    const navigate = useNavigate();
    const handleEvent: GridEventListener<'rowClick'> = (
        params, // GridRowParams
        event, // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
    ) => {
        
    };

    return(
        <div className="flex flex-col justify-center items-center w-svw p-10 h-auto space-y-4 overflow-auto">
            <h1 className="text-black text-[36px] font-bold">Status</h1>

            <section id="DataGrid" style={{ height: '80%', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <DataGrid onRowClick={handleEvent} rows={rows} columns={columns} sx={{backgroundColor: "#FFFFFF"}} className="[&>*]:font-urbanist [&>*]:font-bold"/>
            </section>
        </div>
    );
}