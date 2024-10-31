import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridFilterModel,
} from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import Quotation from "~/models/quotation";
import { DOMAIN } from "~/server/domain";

export default function ConfirmationView() {
  const [rows, setRows] = useState<Quotation[]>([]);
  const [quotation, setQuotation] = useState<Quotation[]>([]);

  async function fetchQuotation() {
    const response = await fetch(DOMAIN + "/quotation/getAllQuotation");
    const data: Quotation[] = await response.json();
    const newData = data.filter((quotation) => {
        if(quotation.status === "Reject") return false;
        return true;
    });

    setQuotation(newData);
    setRows(newData);
  }

  useEffect(() => {
    fetchQuotation();
  }, []);

  let columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "Quotation ID", flex: 1 },
    { field: "unit", headerName: "Unit", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "total_price", headerName: "Total Price", flex: 1 },
    {
      field: "creation_date",
      headerName: "Creation Date",
      flex: 1,
      valueGetter: (value, row) => new Date(value).toUTCString(),
    },
    { field: "status", headerName: "Status", flex: 1, filterable: true },
  ];

  const navigate = useNavigate();
  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    const query = createSearchParams(params.row).toString();
    navigate(`/confirmationdetail?${query}`);
  };

  return (
    <div className="flex flex-col justify-center p-10 items-center space-y-4 w-svw h-auto overflow-auto">
      <h1 className="text-black text-[36px] font-bold">Confirmation</h1>

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
