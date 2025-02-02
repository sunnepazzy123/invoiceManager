import { Controller, Get, Logger, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { extractTokenFromHeader } from "src/helpers";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
) {}

  @Get("github")
  @UseGuards(AuthGuard("github"))
  async githubLogin() {
    // This will redirect to GitHub OAuth page
  }

  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleLogin() {
    // This will redirect to GitHub OAuth page
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const { jwt } = await this.authService.validateOAuthLogin(req.user);
    // Store JWT in a secure cookie
    res.cookie("jwt", jwt, { httpOnly: true, secure: true, sameSite: "strict" });
    // Redirect to frontend with JWT
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }


  @Get("github/callback")
  @UseGuards(AuthGuard("github"))
  async githubCallback(@Req() req, @Res() res) {
    Logger.log(req.user, "loggedIn")
    const { jwt } = await this.authService.validateOAuthLogin(req.user);
    // Store JWT in a secure cookie
    res.cookie("jwt", jwt, { httpOnly: true, secure: true, sameSite: "strict" });
     
    // Redirect to frontend with JWT
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }

    // Sign out route
    @Get("logout")
    async logout(@Res() res) {
      // Clear the JWT cookie
      res.clearCookie("jwt", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      // Redirect to login page
      return res.json({ message: "Logged out successfully" });
    }

    @Get("session")
    async getSession(@Req() req: Request) {
      // Extract JWT from cookies
      const token = req.cookies["jwt"] || extractTokenFromHeader(req);
      if (!token) {
        return { isAuthenticated: false };
      }
  
      // Decode the token (Optional: Validate it)
      try {
        const decoded = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET
        });
        return { isAuthenticated: true, user: decoded };
      } catch (error) {
        return { isAuthenticated: false };
      }
    }
}


