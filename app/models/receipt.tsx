import DeliveryNote from "./delivery_note";

export default interface Receipt {
  id: number;
  receipt_date: Date;
  total_price: number;
  confirmation: string;
//   delivery_notes: DeliveryNote[];
}
