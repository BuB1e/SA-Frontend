import Quotation from "./quotation";
import Receipt from "./receipt";

export default interface DeliveryNote {
  id: number;
  quotation_id: number;
  sender_name: string;
  purchase_date: string;
  reciever_signature: string;
  reciever_name: string;
  receipt_id: number;
//   quotation: Quotation;
//   receipt: Receipt;
}
