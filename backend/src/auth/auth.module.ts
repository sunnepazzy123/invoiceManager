import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { GithubStrategy } from "./github.strategy";
import { PrismaService } from "src/services/prisma.service";
import { GoogleStrategy } from "./google.strategy";
import { ConfigService } from "@nestjs/config";



@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "30d" },
    }),
  ],
  providers: [AuthService, GithubStrategy, GoogleStrategy, PrismaService, JwtService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
