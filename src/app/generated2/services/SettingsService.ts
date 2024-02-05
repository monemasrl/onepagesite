/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Settings } from '../models/Settings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve Settings
     * List the settings.
     * @returns any Successful request
     * @throws ApiError
     */
    public getSettings({
        limit,
        offset,
        meta,
        page,
    }: {
        /**
         * A limit on the number of objects that are returned.
         */
        limit?: number,
        /**
         * How many items to skip when fetching data.
         */
        offset?: number,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        /**
         * Cursor for use in pagination. Often used in combination with limit.
         */
        page?: number,
    }): CancelablePromise<{
        data?: Settings;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings',
            query: {
                'limit': limit,
                'offset': offset,
                'meta': meta,
                'page': page,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update Settings
     * Update the settings
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSetting({
        requestBody,
    }: {
        requestBody?: Record<string, any>,
    }): CancelablePromise<{
        data?: Settings;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
}
