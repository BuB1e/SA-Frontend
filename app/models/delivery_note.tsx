import { Quotation } from "./quotation";
import { Receipt } from "./receipt";
import { Supplier } from "./Supplier";

export class DeliveryNote {
    private id: number;
    private quotation_id: number;
    private sender_name: string;
    private purchase_date: string;
    private receiver_signature: string;
    private receiver_name: string;
    private receipt_id: number;
    private supplier_id: number;
    private quotation: Quotation;
    private receipt: Receipt;
    private supplier: Supplier;

    constructor(
        id: number,
        quotation_id: number,
        sender_name: string,
        purchase_date: string,
        receiver_signature: string,
        receiver_name: string,
        receipt_id: number,
        supplier_id: number,
        quotation: Quotation,
        receipt: Receipt,
        supplier: Supplier
    ) {
        this.id = id;
        this.quotation_id = quotation_id;
        this.sender_name = sender_name;
        this.purchase_date = purchase_date;
        this.receiver_signature = receiver_signature;
        this.receiver_name = receiver_name;
        this.receipt_id = receipt_id;
        this.supplier_id = supplier_id;
        this.quotation = quotation;
        this.receipt = receipt;
        this.supplier = supplier;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getQuotationId(): number {
        return this.quotation_id;
    }

    public getSenderName(): string {
        return this.sender_name;
    }

    public getPurchaseDate(): string {
        return this.purchase_date;
    }

    public getReceiverSignature(): string {
        return this.receiver_signature;
    }

    public getReceiverName(): string {
        return this.receiver_name;
    }

    public getReceiptId(): number {
        return this.receipt_id;
    }

    public getSupplierId(): number {
        return this.supplier_id;
    }

    public getQuotation(): Quotation {
        return this.quotation;
    }

    public getReceipt(): Receipt {
        return this.receipt;
    }

    public getSupplier(): Supplier {
        return this.supplier;
    }

    // Setters
    public setSenderName(sender_name: string): void {
        this.sender_name = sender_name;
    }

    public setPurchaseDate(purchase_date: string): void {
        this.purchase_date = purchase_date;
    }

    public setReceiverSignature(receiver_signature: string): void {
        this.receiver_signature = receiver_signature;
    }

    public setReceiverName(receiver_name: string): void {
        this.receiver_name = receiver_name;
    }
}
