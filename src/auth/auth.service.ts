import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    signIn() {
        return 'I have sign in'
    }

    signUp() {
        return 'I have sign up'
    }
}