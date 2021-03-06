import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {};

    @Post('signup')
    signUp() {
        return this.authService.signIn();
    }

    @Post('signin')
    signIn(): string {
        return this.authService.signUp();
    }
}