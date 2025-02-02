import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/services/prisma.service";
import { IProfileStrata } from "./github.strategy";


@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService) { }

    async validateOAuthLogin(profile: IProfileStrata,) {
        // Find or create user in database
        await this.create(profile)
        // Generate JWT
        const jwt = this.jwtService.sign(profile, {
            secret: process.env.JWT_SECRET
        });
        return { profile, jwt };
    }

    async create(body: IProfileStrata) {
        // Check if the user already exists in the database
        let user = await this.prisma.user.findUnique({
            where: { id: body.id }, // Make sure 'id' is the correct unique identifier from the OAuth provider
        });
    
        if (!user) {
            // Create a new user if not found
            user = await this.prisma.user.create({
                data: {
                    id: body.id,
                    name: body.name,
                    email: body.email,
                    image: body.avatar,
                },
            });
        }
    
        // Check if the account already exists for this user
        let account = await this.prisma.account.findFirst({
            where: {
                userId: user.id,
                provider: body.provider, // Ensure the account is tied to the specific provider
            },
        });
    
        if (!account) {
            // Create a new account entry for OAuth provider
            account = await this.prisma.account.create({
                data: {
                    userId: user.id,
                    type: "oauth",
                    provider: body.provider, // e.g., "github"
                    providerAccountId: body.id, // Use the OAuth provider's unique identifier
                    scope: "read:user, read:email",
                },
            });
        }
    
        return { user, account }; // Return both user and account info
    }
    
}
