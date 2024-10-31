import DeliveryNote from "./delivery_note";

export default interface Receipt {
  id: number;
  date: Date;
  total: number;
  confirmation: string;
  delivery_notes: DeliveryNote[];
}
