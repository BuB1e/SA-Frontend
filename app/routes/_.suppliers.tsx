import { DataGrid, GridEventListener, GridColDef } from "@mui/x-data-grid";
import { createSearchParams, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import CustomButton from "~/components/custom_button";
import Supplier from "~/models/supplier";
import { DOMAIN } from "~/server/domain";

export default function SuppliersView() {
  interface SupplierChart {
    id: number;
    supplier_name: string;
    tax_number: string;
    user_id: number;
  }

  const [rows, setRows] = useState<SupplierChart[]>([]);
  const [supplier, setSupplier] = useState<Supplier[]>([]);

  async function fetchSupplier() {
    const response = await fetch(DOMAIN + "/supplier/getAllSupplier");
    const data: Supplier[] = await response.json();
    setSupplier(data);
    let supplierChart: SupplierChart[] = [];
    data.map((supplier) => {
      supplierChart.push({
        id: supplier.supplier_id,
        supplier_name: supplier.supplier_name,
        tax_number: supplier.tax_number,
        user_id: supplier.user_id,
      });
    });
    setRows(supplierChart);
  }

  useEffect(() => {
    fetchSupplier();
  }, []);

  let columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      valueGetter: (value, row) => row.id,
    },
    { field: "supplier_name", headerName: "Name", flex: 1 },
    { field: "tax_number", headerName: "Tax Number", flex: 1 },
    { field: "user_id", headerName: "User ID", flex: 1 },
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
      <div className="flex flex-row space-x-4">
        <h1 className="text-black text-[36px] font-bold">Suppliers</h1>
        <CustomButton
          text="Add Supplier"
          color="bg-button-green"
          route="/addsupplier"
        />
      </div>
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
