import Api from ".";
import { User } from "../model";
import { validate as checkEmail } from "isemail";
import owasp from "owasp-password-strength-test";

/**
 * Fake users API.
 */
export default class UsersApi extends Api {
  private users: Array<User> = [
    {
      name: "test",
      email: "test@example.com",
      password: "test",
    },
  ];

  async login(nameOrEmail: string, password: string): Promise<User> {
    const user = this.users.find((user) => {
      if (user.password !== password) return false;
      if (user.name === nameOrEmail) return true;
      if (user.email === nameOrEmail) return true;
      return false;
    });
    if (!user) {
      throw Error("Incorrect username or password.");
    }
    return user;
  }

  async register(name: string, email: string, password: string): Promise<User> {
    const existingUser = this.users.find((user) => {
      if (user.name === name) return true;
      if (user.email === email) return true;
      return false;
    });
    if (existingUser) {
      throw Error("A user with that name or email already exists.");
    }
    const emailCheck = checkEmail(email);
    if (!emailCheck) {
      throw Error("Invalid email.");
    }
    const passwordCheck = owasp.test(password)
    if (!passwordCheck.strong) {
      throw Error(passwordCheck.errors[0] ?? "Password not strong enough.");
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
    this.users.push(user);
    return user;
  }
}
