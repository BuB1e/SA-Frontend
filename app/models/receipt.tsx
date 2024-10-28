import { DeliveryNote } from "./delivery_note";
import { Supplier } from "./Supplier";

export class Receipt {
    private id: number;
    private date: Date;
    private total: number;
    private supplier_id: number;
    private confirmation: string;
    private delivery_notes: DeliveryNote[];
    private suppliers: Supplier[];

    constructor(
        id: number,
        date: Date,
        total: number,
        supplier_id: number,
        confirmation: string,
        delivery_notes: DeliveryNote[],
        suppliers: Supplier[]
    ) {
        this.id = id;
        this.date = date;
        this.total = total;
        this.supplier_id = supplier_id;
        this.confirmation = confirmation;
        this.delivery_notes = delivery_notes;
        this.suppliers = suppliers;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getDate(): Date {
        return this.date;
    }

    public getTotal(): number {
        return this.total;
    }

    public getSupplierId(): number {
        return this.supplier_id;
    }

    public getConfirmation(): string {
        return this.confirmation;
    }

    public getDeliveryNotes(): DeliveryNote[] {
        return this.delivery_notes;
    }

    public getSuppliers(): Supplier[] {
        return this.suppliers;
    }

    // Setters
    public setDate(date: Date): void {
        this.date = date;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public setSupplierId(supplier_id: number): void {
        this.supplier_id = supplier_id;
    }

    public setConfirmation(confirmation: string): void {
        this.confirmation = confirmation;
    }

    public setDeliveryNotes(delivery_notes: DeliveryNote[]): void {
        this.delivery_notes = delivery_notes;
    }

    public setSuppliers(suppliers: Supplier[]): void {
        this.suppliers = suppliers;
    }
}
