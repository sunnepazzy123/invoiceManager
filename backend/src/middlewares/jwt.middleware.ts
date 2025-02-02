import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    Logger.log("midlleware start")
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }
  
    try {
      const user = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET
      })
      req['user'] = user; // Attach the user info to the request object
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    Logger.log("midlleware end")
    next(); // Pass control to the next middleware or controller
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
