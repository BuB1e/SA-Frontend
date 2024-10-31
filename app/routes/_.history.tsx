import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";

export default function HistoryView() {
    let rows = [
        { id: 1, supplier: "Au", unit: 5, receipt: 1,price : 200, total: 1000, purchasedate : '24/07/2023'},
        { id: 2, supplier: "Au", unit: 2, receipt: 2,price : 200, total: 400, purchasedate : '24/07/2023'},
        { id: 3, supplier: "Au", unit: 3, receipt: 3,price : 200, total: 600, purchasedate : '24/07/2023'},
        { id: 4, supplier: "Au", unit: 10, receipt: 4,price : 200, total: 2000, purchasedate : '24/07/2023'},
        { id: 5, supplier: "Au", unit: 4, receipt: 5,price : 200, total: 800, purchasedate : '24/07/2023'},
        { id: 6, supplier: "Au", unit: 7, receipt: 6,price : 200, total: 2100, purchasedate : '24/07/2023'},
        { id: 7, supplier: "Au", unit: 9, receipt: 7,price : 200, total: 1800, purchasedate : '24/07/2023'},
        { id: 8, supplier: "Au", unit: 8, receipt: 8,price : 200, total: 2400, purchasedate : '24/07/2023'},
    ];
    let columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'supplier', headerName: 'Supplier', flex: 1},
        {field: 'receipt', headerName: 'Receipt', flex: 1},
        {field: 'unit', headerName: 'Unit', flex: 1},
        {field: 'price', headerName: 'Price', flex: 1},
        {field: 'total', headerName: 'Total Price', flex: 1},
        {field: 'purchasedate', headerName: 'Purchase Date', flex: 1},
        {field: 'status', headerName: 'Status', flex: 1},
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