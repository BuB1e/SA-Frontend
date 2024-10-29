import { DeliveryNote } from "./delivery_note";

export class Receipt {
    private id: number;
    private date: Date;
    private total: number;
    private confirmation: string;
    private delivery_notes: DeliveryNote[];

    constructor(
        id: number,
        date: Date,
        total: number,
        confirmation: string,
        delivery_notes: DeliveryNote[],
    ) {
        this.id = id;
        this.date = date;
        this.total = total;
        this.confirmation = confirmation;
        this.delivery_notes = delivery_notes;
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

    public getConfirmation(): string {
        return this.confirmation;
    }

    public getDeliveryNotes(): DeliveryNote[] {
        return this.delivery_notes;
    }

    // Setters
    public setDate(date: Date): void {
        this.date = date;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public setConfirmation(confirmation: string): void {
        this.confirmation = confirmation;
    }

    public setDeliveryNotes(delivery_notes: DeliveryNote[]): void {
        this.delivery_notes = delivery_notes;
    }
}
