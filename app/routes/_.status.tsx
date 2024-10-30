import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "@remix-run/react";

export default function StatusView() {
    let rows = [
        { id: 1, supplier: 'Jamaal', lastName: 'Gorczany',  email: 'jg@example.com' },
        { id: 2, supplier: 'Deon', lastName: 'Jast', email: 'dj@example.com'},
        { id: 3, supplier: 'Francisca', lastName: 'Lowe', email: 'fl@example.com'},
        { id: 4, supplier: 'Christine', lastName: 'Hermiston', email: 'ch@example.com'},
        { id: 5, supplier: 'Gunner', lastName: 'Will', email: 'gw@example.com'},
        { id: 6, supplier: 'Ereyn', lastName: 'David', email: 'ed@example.com'},
        { id: 7, supplier: 'Ambrose', lastName: 'Johnston', email: 'aj@example.com'},
        { id: 8, supplier: 'Telly', lastName: 'Witting', email: 'tw@example.com'},
        { id: 9, supplier: 'John', lastName: 'Gutman', email: 'jg@example.com'},
        { id: 10, supplier: 'Spencer', lastName: 'Kemmer', email: 'sk@example.com'},
        { id: 11, supplier: 'Holly', lastName: 'Parisian', email: 'hp@example.com'},
        { id: 12, supplier: 'Jonas', lastName: 'Ambrose', email: 'ja@example.com'},
        { id: 13, supplier: 'Mark', lastName: 'Smith', email: 'ms@example.com'},
        { id: 14, supplier: 'Carole', lastName: 'Spencer', email: 'cs@example.com'},
        { id: 15, supplier: 'Rebecca', lastName: 'Nelson', email: 'rn@example.com'},
    ];
    let columns = [
        {field: 'supplier', headerName: 'First Name', flex: 1},
        {field: 'lastName', headerName: 'Last Name', flex: 1},
        {field: 'email', headerName: 'Last Name', flex: 1},
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
                <DataGrid onRowClick={handleEvent} rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}}/>
            </section>
        </div>
    );
}