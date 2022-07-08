import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signIn() {
        return 'I have sign in'
    }

    signUp() {
        return 'I have sign up'
    }
}