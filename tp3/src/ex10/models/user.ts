import { Person } from "./person";

export enum Role {
  User = "User",
  Admin = "Admin"
}

export class User extends Person {
  constructor(id: number, name: string, public role: Role) {
    super(id, name);
  }
}
