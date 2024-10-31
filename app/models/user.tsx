import Supplier from "./supplier";

export default interface User {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  priority: number;
  // suppliers: Supplier[];
}
