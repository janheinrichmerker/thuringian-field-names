import Api from ".";
import { User } from "../model";
import { validate as checkEmail } from "isemail";
import owasp from "owasp-password-strength-test";

/**
 * Fake API for user state.
 */
export default class UsersApi extends Api {
  /**
   * User database with initial test user.
   */
  private users: Array<User> = [
    {
      name: "test",
      email: "test@example.com",
      password: "test",
    },
  ];

  /**
   * Sign in to a user account using the given credentials.
   *
   * If credentials are invalid, throws an error.
   *
   * @param nameOrEmail Username or email address.
   * @param password User password.
   *
   * @returns The logged in user.
   */
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

  /**
   * Sign up for a new user account using the given user details.
   *
   * If email is invalid, password is too weak,
   * or a user with the same details already exists,
   * throws an error.
   *
   * @param name Username or email address.
   * @param email Email address.
   * @param password User password.
   *
   * @returns The logged in user.
   */
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
      throw Error("Invalid email address.");
    }
    const passwordCheck = owasp.test(password);
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
