import DeliveryNote from "./delivery_note";

enum StatusEnum {
  Accept = "Accept",
  Reject = "Reject",
  Considered = "Considered",
}

export default interface Quotation {
  id: number;
  unit: number;
  price: number;
  total_price: number;
  factory_sign : string;
  supplier_sign: string;
  creation_date: Date;
  accept_date: Date;
  supplier_id: number;
  status: StatusEnum;
//   delivery_notes: DeliveryNote[];
}
