import { DeliveryNote } from "./delivery_note";
import { Quotation } from "./quotation";
import { Receipt } from "./receipt";
import { User } from "./user";

export class Supplier {
    private id: number;
    private name: string;
    private tax_number: string;
    private user_id: number;
    private delivery_notes: DeliveryNote[];
    private quotations: Quotation[];
    private receipts: Receipt[];
    private user: User;

    constructor(
        id: number,
        name: string,
        tax_number: string,
        user_id: number,
        delivery_notes: DeliveryNote[],
        quotations: Quotation[],
        receipts: Receipt[],
        user: User
    ) {
        this.id = id;
        this.name = name;
        this.tax_number = tax_number;
        this.user_id = user_id;
        this.delivery_notes = delivery_notes;
        this.quotations = quotations;
        this.receipts = receipts;
        this.user = user;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getTaxNumber(): string {
        return this.tax_number;
    }

    public getUserId(): number {
        return this.user_id;
    }

    public getDeliveryNotes(): DeliveryNote[] {
        return this.delivery_notes;
    }

    public getQuotations(): Quotation[] {
        return this.quotations;
    }

    public getReceipts(): Receipt[] {
        return this.receipts;
    }

    public getUser(): User {
        return this.user;
    }

    // Setters
    public setName(name: string): void {
        this.name = name;
    }

    public setTaxNumber(tax_number: string): void {
        this.tax_number = tax_number;
    }

    public setUserId(user_id: number): void {
        this.user_id = user_id;
    }

    public setDeliveryNotes(delivery_notes: DeliveryNote[]): void {
        this.delivery_notes = delivery_notes;
    }

    public setQuotations(quotations: Quotation[]): void {
        this.quotations = quotations;
    }

    public setReceipts(receipts: Receipt[]): void {
        this.receipts = receipts;
    }

    public setUser(user: User): void {
        this.user = user;
    }
}
