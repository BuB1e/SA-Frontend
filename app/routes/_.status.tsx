import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "@remix-run/react";

export default function StatusView() {
    let rows = [
        { id: 1, firstName: 'Jamaal', lastName: 'Gorczany',  email: 'jg@example.com' },
        { id: 2, firstName: 'Deon', lastName: 'Jast', email: 'dj@example.com'},
        { id: 3, firstName: 'Francisca', lastName: 'Lowe', email: 'fl@example.com'},
        { id: 4, firstName: 'Christine', lastName: 'Hermiston', email: 'ch@example.com'},
        { id: 5, firstName: 'Gunner', lastName: 'Will', email: 'gw@example.com'},
        { id: 6, firstName: 'Ereyn', lastName: 'David', email: 'ed@example.com'},
        { id: 7, firstName: 'Ambrose', lastName: 'Johnston', email: 'aj@example.com'},
        { id: 8, firstName: 'Telly', lastName: 'Witting', email: 'tw@example.com'},
        { id: 9, firstName: 'John', lastName: 'Gutman', email: 'jg@example.com'},
        { id: 10, firstName: 'Spencer', lastName: 'Kemmer', email: 'sk@example.com'},
        { id: 11, firstName: 'Holly', lastName: 'Parisian', email: 'hp@example.com'},
        { id: 12, firstName: 'Jonas', lastName: 'Ambrose', email: 'ja@example.com'},
        { id: 13, firstName: 'Mark', lastName: 'Smith', email: 'ms@example.com'},
        { id: 14, firstName: 'Carole', lastName: 'Spencer', email: 'cs@example.com'},
        { id: 15, firstName: 'Rebecca', lastName: 'Nelson', email: 'rn@example.com'},
    ];
    let columns = [
        {field: 'firstName', headerName: 'First Name', flex: 1},
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
        <div className="flex flex-col justify-center items-center space-y-4 overflow-auto">
            <h1 className="text-black text-[36px] font-bold">Status</h1>

            <section id="DataGrid" style={{ height: '80%', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <DataGrid onRowClick={handleEvent} rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}}/>
            </section>
        </div>
    );
}