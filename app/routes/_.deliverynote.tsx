import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";

export default function DeliveryNoteView() {
    let rows = [
        { id: 1, unit: 5, price: 200,  supplier: "Au", purchasedate : '24/07/2023', status : 'Considered'},
        { id: 2, unit: 2, price: 200, supplier: "Au", purchasedate : '24/07/2023', status : 'Considered'},
        { id: 3, unit: 3, price: 200, supplier: "Au", purchasedate : '24/07/2023', status : 'Considered'},
        { id: 4, unit: 10, price: 200, supplier: "Au", purchasedate : null, status : 'Considered'},
        { id: 5, unit: 4, price: 200, supplier: "Au", purchasedate : '24/07/2023', status : 'Considered'},
        { id: 6, unit: 7, price: 300, supplier: "Au", purchasedate : '24/07/2023', status : 'Considered'},
        { id: 7, unit: 9, price: 200, supplier: "Au", purchasedate : '24/07/2023', status : 'Considered'},
        { id: 8, unit: 8, price: 300, supplier: "Au", purchasedate : null, status : 'Considered'},
    ];
    let columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'unit', headerName: 'Unit', flex: 1},
        {field: 'price', headerName: 'Price', flex: 1},
        {field: 'supplier', headerName: 'Supplier', flex: 1},
        {field: 'purchasedate', headerName: 'Date', flex: 1},
        {field: 'status', headerName: 'Status', flex: 1},
    ];
    const navigate = useNavigate();
    const handleEvent: GridEventListener<'rowClick'> = (
        params, // GridRowParams
        event, // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
    ) => {
        const query = createSearchParams(params.row).toString();
        navigate(`/deliverynotedetail?${query}`)
    };

    return(
        <div className="flex flex-col justify-center items-center space-y-4 overflow-auto">
            <h1 className="text-black text-[36px] font-bold">Delivery Note</h1>

            <section id="DataGrid" style={{ height: '80%', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <DataGrid onRowClick={handleEvent} rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}}/>
            </section>
        </div>
    );
}