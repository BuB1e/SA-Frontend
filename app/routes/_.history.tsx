import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";

export default function History() {
    let rows = [
        { id: 1, unit: 5, receipt: 1,price : 200, total: 1000, creationdate : '24/07/2023'},
        { id: 2, unit: 2, receipt: 2,price : 200, total: 400, creationdate : '24/07/2023'},
        { id: 3, unit: 3, receipt: 3,price : 200, total: 600, creationdate : '24/07/2023'},
        { id: 4, unit: 10, receipt: 4,price : 200, total: 2000, creationdate : '24/07/2023'},
        { id: 5, unit: 4, receipt: 5,price : 200, total: 800, creationdate : '24/07/2023'},
        { id: 6, unit: 7, receipt: 6,price : 200, total: 2100, creationdate : '24/07/2023'},
        { id: 7, unit: 9, receipt: 7,price : 200, total: 1800, creationdate : '24/07/2023'},
        { id: 8, unit: 8, receipt: 8,price : 200, total: 2400, creationdate : '24/07/2023'},
    ];
    let columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'receipt', headerName: 'Receipt', flex: 1},
        {field: 'unit', headerName: 'Unit', flex: 1},
        {field: 'price', headerName: 'Price', flex: 1},
        {field: 'total', headerName: 'Total Price', flex: 1},
        {field: 'creationdate', headerName: 'Creation Date', flex: 1},
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
        <div className="flex flex-col justify-center items-center space-y-4 overflow-auto">
            <h1 className="text-black text-[36px] font-bold">History</h1>

            <section id="DataGrid" style={{ height: '80%', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <DataGrid onRowClick={handleEvent} rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}}/>
            </section>
        </div>
    );
}