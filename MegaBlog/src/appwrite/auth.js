import conf from "../conf/conf.js";
import { Client, Account, Id } from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client.setEndpoint(conf.appwriteUrl).setProject(
            conf.appwriteProjectId
        );

        this.account = new Account(this.Client);
    }
    f
    // Login with email and password and return user account
    async createAccount({ email, password, name }) {
        try {
            // Create user account
            const userAccount = await this.account.create(
                Id.unique(),
                email,
                password,
                name
            ); // Create user account
            if (userAccount) {
                // Call another function 
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default AuthService;
