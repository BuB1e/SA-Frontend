import { DeliveryNote } from "./delivery_note";

enum StatusEnum {
    Accept = 'Accept',
    Reject = 'Reject',
    Considered = 'Considered',
}

export class Quotation {
    private id: number;
    private unit: number;
    private price: number;
    private total: number;
    private supplier_sign: string;
    private creation_date: Date;
    private accept_date: Date;
    private supplier_id: number;
    private status: StatusEnum;
    private delivery_notes: DeliveryNote[];

    constructor(
        id: number,
        unit: number,
        price: number,
        total: number,
        supplier_sign: string,
        creation_date: Date,
        accept_date: Date,
        supplier_id: number,
        status: StatusEnum,
        delivery_notes: DeliveryNote[]
    ) {
        this.id = id;
        this.unit = unit;
        this.price = price;
        this.total = total;
        this.supplier_sign = supplier_sign;
        this.creation_date = creation_date;
        this.accept_date = accept_date;
        this.supplier_id = supplier_id;
        this.status = status;
        this.delivery_notes = delivery_notes;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getUnit(): number {
        return this.unit;
    }

    public getPrice(): number {
        return this.price;
    }

    public getTotal(): number {
        return this.total;
    }

    public getSupplierSign(): string {
        return this.supplier_sign;
    }

    public getCreationDate(): Date {
        return this.creation_date;
    }

    public getAcceptDate(): Date {
        return this.accept_date;
    }

    public getSupplierId(): number {
        return this.supplier_id;
    }

    public getStatus(): StatusEnum {
        return this.status;
    }

    public getDeliveryNotes(): DeliveryNote[] {
        return this.delivery_notes;
    }

    // Setters
    public setUnit(unit: number): void {
        this.unit = unit;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public setSupplierSign(supplier_sign: string): void {
        this.supplier_sign = supplier_sign;
    }

    public setCreationDate(creation_date: Date): void {
        this.creation_date = creation_date;
    }

    public setAcceptDate(accept_date: Date): void {
        this.accept_date = accept_date;
    }

    public setStatus(status: StatusEnum): void {
        this.status = status;
    }

    public setDeliveryNotes(delivery_notes: DeliveryNote[]): void {
        this.delivery_notes = delivery_notes;
    }
}
