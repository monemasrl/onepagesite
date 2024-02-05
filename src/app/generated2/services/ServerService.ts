/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * System Info
     * Perform a system status check and return the options.
     * @returns any Successful request
     * @throws ApiError
     */
    public serverInfo({
        superAdminToken,
    }: {
        /**
         * The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server.
         */
        superAdminToken: number,
    }): CancelablePromise<{
        data?: Record<string, any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/server/info',
            query: {
                'super_admin_token': superAdminToken,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Ping
     * Ping, pong. Ping.. pong.
     * @returns string Successful request
     * @throws ApiError
     */
    public ping(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/server/ping',
        });
    }
}
