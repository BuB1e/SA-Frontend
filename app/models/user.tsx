import { Supplier } from "./Supplier";

export class User {
    private uid: string;
    private username: string;
    private password: string;
    private salt: string;
    private priority: number;
    private suppliers: Supplier[];

    constructor(
        uid: string,
        username: string,
        password: string,
        salt: string,
        priority: number,
        suppliers: Supplier[]
    ) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.salt = salt;
        this.priority = priority;
        this.suppliers = suppliers;
    }

    // Getters
    public getUid(): string {
        return this.uid;
    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public getSalt(): string {
        return this.salt;
    }

    public getPriority(): number {
        return this.priority;
    }

    public getSuppliers(): Supplier[] {
        return this.suppliers;
    }

    // Setters
    public setUsername(username: string): void {
        this.username = username;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public setSalt(salt: string): void {
        this.salt = salt;
    }

    public setPriority(priority: number): void {
        this.priority = priority;
    }

    public setSuppliers(suppliers: Supplier[]): void {
        this.suppliers = suppliers;
    }
}
