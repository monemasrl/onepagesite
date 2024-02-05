/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Roles } from '../models/Roles';
import type { Webhooks } from '../models/Webhooks';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebhooksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Webhooks
     * Get all webhooks.
     * @returns any Successful request
     * @throws ApiError
     */
    public getWebhooks(): CancelablePromise<{
        data?: Webhooks;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create a Webhook
     * Create a new webhook.
     * @returns any Successful request
     * @throws ApiError
     */
    public createWebhook({
        fields,
        meta,
        requestBody,
    }: {
        /**
         * Control what fields are being returned in the object.
         */
        fields?: Array<string>,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: {
            /**
             * The name of the webhook.
             */
            name?: string;
            /**
             * Method used in the webhook.
             */
            method?: string;
            /**
             * The url of the webhook.
             */
            url?: string;
            /**
             * The status of the webhook.
             */
            status?: string;
            /**
             * If yes, send the content of what was done
             */
            data?: boolean;
            /**
             * The actions that triggers this webhook.
             */
            actions?: any;
            /**
             * The collections that triggers this webhook.
             */
            'system-collections'?: any;
        },
    }): CancelablePromise<{
        data?: Roles;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/webhooks',
            query: {
                'fields': fields,
                'meta': meta,
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
     * Update Multiple Webhooks
     * Update multiple webhooks at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateWebhooks({
        fields,
        limit,
        meta,
        offset,
        sort,
        filter,
        search,
        requestBody,
    }: {
        /**
         * Control what fields are being returned in the object.
         */
        fields?: Array<string>,
        /**
         * A limit on the number of objects that are returned.
         */
        limit?: number,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        /**
         * How many items to skip when fetching data.
         */
        offset?: number,
        /**
         * How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *
         */
        sort?: Array<string>,
        /**
         * Select items in collection by given conditions.
         */
        filter?: Array<string>,
        /**
         * Filter by items that contain the given search query in one of their fields.
         */
        search?: string,
        requestBody?: {
            data?: {
                /**
                 * The name of the webhook.
                 */
                name?: string;
                /**
                 * Method used in the webhook.
                 */
                method?: string;
                /**
                 * The url of the webhook.
                 */
                url?: string;
                /**
                 * The status of the webhook.
                 */
                status?: string;
                /**
                 * If yes, send the content of what was done
                 */
                data?: boolean;
                /**
                 * The actions that triggers this webhook.
                 */
                actions?: any;
                /**
                 * The collections that triggers this webhook.
                 */
                'system-collections'?: any;
            };
            keys?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Array<Webhooks>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/webhooks',
            query: {
                'fields': fields,
                'limit': limit,
                'meta': meta,
                'offset': offset,
                'sort': sort,
                'filter': filter,
                'search': search,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Delete Multiple Webhooks
     * Delete multiple existing webhooks.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteWebhooks(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/webhooks',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve a Webhook
     * Retrieve a single webhook by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getWebhook({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<{
        data?: Webhooks;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update a Webhook
     * Update an existing webhook
     * @returns any Successful request
     * @throws ApiError
     */
    public updateWebhook({
        id,
        fields,
        meta,
        requestBody,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
        /**
         * Control what fields are being returned in the object.
         */
        fields?: Array<string>,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: {
            /**
             * The name of the webhook.
             */
            name?: string;
            /**
             * Method used in the webhook.
             */
            method?: string;
            /**
             * The url of the webhook.
             */
            url?: string;
            /**
             * The status of the webhook.
             */
            status?: string;
            /**
             * If yes, send the content of what was done
             */
            data?: boolean;
            /**
             * The actions that triggers this webhook.
             */
            actions?: any;
            /**
             * The collections that triggers this webhook.
             */
            'system-collections'?: any;
        },
    }): CancelablePromise<{
        data?: Roles;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/webhooks/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'meta': meta,
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
     * Delete a Webhook
     * Delete an existing webhook
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteWebhook({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/webhooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
}
