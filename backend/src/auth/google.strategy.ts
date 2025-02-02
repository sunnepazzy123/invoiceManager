import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { IProfileStrata } from './github.strategy';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly configService: ConfigService) {
        super({
            clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
            callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
            scope: ['email', 'profile'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {

        if (!accessToken) {
            throw new Error("Token not found");
        }
        const { emails, photos, } = profile;
        const user = {
            id: profile.id,
            email: emails[0].value,
            name: profile.displayName,
            avatar: photos[0].value,
            provider: profile.provider,
            accessToken,
        } as IProfileStrata;

        done(null, user);
    }
}
