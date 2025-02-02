import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { AuthService } from './auth.service';

export interface IProfileStrata {
  id: string,
  nodeId?: string,
  name: string
  email: string
  avatar: string
  provider: string
  accessToken: string
}

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL, // Ensure this matches
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    if (!accessToken) {
      throw new Error("Token not found");
    }

    // Return user data along with the access token
    return {
      id: profile.id,
      name: profile.displayName || profile.username,
      email: profile.emails?.[0]?.value || null,
      avatar: profile.photos?.[0]?.value || null,
      provider: profile.provider || null,
      accessToken, // Include access token
    } as IProfileStrata;
  }

}
