import DeliveryNote from "./delivery_note";
import Quotation from "./quotation";
import Receipt from "./receipt";
import User from "./user";

export default interface Supplier {
  supplier_id: number;
  supplier_name: string;
  tax_number: string;
  user_id: number;
  delivery_notes: DeliveryNote[];
  quotations: Quotation[];
  receipts: Receipt[];
  user: User;
}
