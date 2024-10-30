// import { ActionFunction, LoaderFunction } from "@remix-run/node";
// import { Form, json, useLoaderData } from "@remix-run/react";


// // Type definition for a Supplier
// type Supplier = {
//     id: number;
//     name: string;
//   };
  
//   // Loader function to fetch the suppliers
//   export const loader: LoaderFunction = async () => {
//     // Simulate fetching data from a database or API
//     const suppliers: Supplier[] = [
//       { id: 1, name: "Supplier A" },
//       { id: 2, name: "Supplier B" },
//       { id: 3, name: "Supplier C" },
//     ];
  
//     return json(suppliers);
//   };
  
//   export const action: ActionFunction = async ({ request }) => {
//     const formData = await request.formData();
//     const selectedSupplier = formData.get("supplier");
  
//     console.log("Selected Supplier ID:", selectedSupplier);
  
//     // Handle the selected supplier (e.g., store in DB or trigger further actions)
//     return null;
//   };
  

// export default function SupplierDropDown() {
//     const suppliers = useLoaderData<Supplier[]>(); // Get suppliers from loader
//     return(
//         <div>
//             <h1>Select a Supplier</h1>

//             <Form method="post">
//                 <label htmlFor="supplier">Supplier:</label>
//                 <select id="supplier" name="supplier" required>
//                 <option value="">--Select a Supplier--</option>
//                 {suppliers.map((supplier) => (
//                     <option key={supplier.id} value={supplier.id}>
//                     {supplier.name}
//                     </option>
//                 ))}
//                 </select>

//                 <button type="submit" style={{ marginLeft: "10px" }}>
//                 Submit
//                 </button>
//             </Form>
//         </div>
//     );
// }