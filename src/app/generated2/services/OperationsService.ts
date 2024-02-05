/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Operations } from '../models/Operations';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OperationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Operations
     * Get all operations.
     * @returns any Successful request
     * @throws ApiError
     */
    public getOperations(): CancelablePromise<{
        data?: Array<Operations>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/operations',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create an Operation
     * Create a new operation.
     * @returns any Successful request
     * @throws ApiError
     */
    public createOperation({
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
        requestBody?: Operations,
    }): CancelablePromise<{
        data?: Operations;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/operations',
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
     * Update Multiple Operations
     * Update multiple operations at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateOperations({
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
            data?: Operations;
            keys?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Array<Operations>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/operations',
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
     * Delete Multiple Operations
     * Delete multiple existing operations.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteOperations(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/operations',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Operation
     * Retrieve a single operation by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getOperation({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<{
        data?: Operations;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/operations/{id}',
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
     * Update an Operation
     * Update an existing operation
     * @returns any Successful request
     * @throws ApiError
     */
    public updateOperation({
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
        requestBody?: Operations,
    }): CancelablePromise<{
        data?: Operations;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/operations/{id}',
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
     * Delete an Operation
     * Delete an existing operation
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteOperation({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/operations/{id}',
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
