/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Versions } from '../models/Versions';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VersionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Content Versions
     * Get all Content Versions.
     * @returns any Successful request
     * @throws ApiError
     */
    public getContentVersions({
        fields,
        limit,
        offset,
        meta,
        sort,
        filter,
        search,
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
         * How many items to skip when fetching data.
         */
        offset?: number,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
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
    }): CancelablePromise<{
        data?: Array<Versions>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions',
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'meta': meta,
                'sort': sort,
                'filter': filter,
                'search': search,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create Multiple Content Versions
     * Create multiple new Content Versions.
     * @returns any Successful request
     * @throws ApiError
     */
    public createContentVersion({
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
        requestBody?: Versions,
    }): CancelablePromise<{
        data?: Versions;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/versions',
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
     * Update Multiple Content Versions
     * Update multiple Content Versions at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateContentVersions({
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
            data?: Versions;
            keys?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Array<Versions>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/versions',
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
     * Delete Multiple Content Versions
     * Delete multiple existing Content Versions.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteContentVersions(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/versions',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve a Content Version
     * Retrieve a single Content Version by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getContentVersion({
        id,
        fields,
        meta,
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
    }): CancelablePromise<{
        data?: Versions;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update a Content Version
     * Update an existing Content Version.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateContentVersion({
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
        requestBody?: Versions,
    }): CancelablePromise<{
        data?: Versions;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/versions/{id}',
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
     * Delete a Content Version
     * Delete an existing Content Version.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteContentVersion({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/versions/{id}',
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
     * Save to a Content Version
     * Save item changes to an existing Content Version.
     * @returns any Successful request
     * @throws ApiError
     */
    public saveContentVersion({
        id,
        requestBody,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/versions/{id}/save',
            path: {
                'id': id,
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
     * Compare a Content Version
     * Compare an existing Content Version with the main version of the item.
     * @returns any Successful request
     * @throws ApiError
     */
    public compareContentVersion({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<{
        data?: Record<string, any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions/{id}/compare',
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
     * Promote a Content Version
     * Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected).
     * @returns any Successful request
     * @throws ApiError
     */
    public promoteContentVersion({
        id,
        requestBody,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
        requestBody?: {
            /**
             * Hash of the main version of the item to be promoted.
             */
            mainHash?: string;
            /**
             * Optional array of field names of which the values are to be promoted.
             */
            fields?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/versions/{id}/promote',
            path: {
                'id': id,
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
