/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthenticationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a Temporary Access Token
     * Retrieve a Temporary Access Token
     * @returns any Successful authentification
     * @throws ApiError
     */
    public login({
        requestBody,
    }: {
        requestBody?: {
            /**
             * Email address of the user you're retrieving the access token for.
             */
            email: string;
            /**
             * Password of the user.
             */
            password: string;
            /**
             * Choose between retrieving the token as a string, or setting it as a cookie.
             */
            mode?: 'json' | 'cookie';
            /**
             * If 2FA is enabled, you need to pass the one time password.
             */
            otp?: string;
        },
    }): CancelablePromise<{
        data?: {
            access_token?: string;
            expires?: number;
            refresh_token?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Refresh Token
     * Refresh a Temporary Access Token.
     * @returns any Successful request
     * @throws ApiError
     */
    public refresh({
        requestBody,
    }: {
        requestBody?: {
            /**
             * JWT access token you want to refresh. This token can't be expired.
             */
            refresh_token?: string;
        },
    }): CancelablePromise<{
        data?: {
            access_token?: string;
            expires?: number;
            refresh_token?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Log Out
     * Log Out
     * @returns any Request successful
     * @throws ApiError
     */
    public logout({
        requestBody,
    }: {
        requestBody?: {
            /**
             * JWT access token you want to logout.
             */
            refresh_token?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/logout',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Request a Password Reset
     * Request a reset password email to be send.
     * @returns void
     * @throws ApiError
     */
    public passwordRequest({
        requestBody,
    }: {
        requestBody?: {
            /**
             * Email address of the user you're requesting a reset for.
             */
            email: string;
        },
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/password/request',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Reset a Password
     * The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.
     * @returns void
     * @throws ApiError
     */
    public passwordReset({
        requestBody,
    }: {
        requestBody?: {
            /**
             * One-time use JWT token that is used to verify the user.
             */
            token: string;
            /**
             * New password for the user.
             */
            password: string;
        },
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/password/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * List OAuth Providers
     * List configured OAuth providers.
     * @returns any Successful request
     * @throws ApiError
     */
    public oauth(): CancelablePromise<{
        public?: boolean;
        data?: Array<string>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/oauth',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Authenticated using an OAuth provider
     * Start OAuth flow using the specified provider
     * @returns any Successful request
     * @throws ApiError
     */
    public oauthProvider({
        provider,
        redirect,
    }: {
        /**
         * Key of the activated OAuth provider.
         */
        provider: string,
        /**
         * Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned.
         */
        redirect?: string,
    }): CancelablePromise<{
        public?: boolean;
        data?: {
            token?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/oauth/{provider}',
            path: {
                'provider': provider,
            },
            query: {
                'redirect': redirect,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
}
