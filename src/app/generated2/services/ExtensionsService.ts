/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Extensions } from '../models/Extensions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExtensionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Extensions
     * List the installed extensions and their configuration in the project.
     * @returns any Successful request
     * @throws ApiError
     */
    public listExtensions(): CancelablePromise<{
        data?: Array<Extensions>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/extensions',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Update an Extension
     * Update an existing extension.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateExtensions({
        name,
        requestBody,
    }: {
        name: string,
        requestBody?: {
            /**
             * Directus metadata for the extension. Where the configuration for the extension in the current project is stored.
             */
            meta?: {
                /**
                 * Whether or not the extension is enabled.
                 */
                enabled?: boolean;
            };
        },
    }): CancelablePromise<{
        data?: Extensions;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/extensions/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update an Extension
     * Update an existing extension.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateExtensions1({
        bundle,
        name,
        requestBody,
    }: {
        bundle: string,
        name: string,
        requestBody?: {
            /**
             * Directus metadata for the extension. Where the configuration for the extension in the current project is stored.
             */
            meta?: {
                /**
                 * Whether or not the extension is enabled.
                 */
                enabled?: boolean;
            };
        },
    }): CancelablePromise<{
        data?: Extensions;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/extensions/{bundle}/{name}',
            path: {
                'bundle': bundle,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
}
