/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flows } from '../models/Flows';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FlowsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Flows
     * Get all flows.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFlows(): CancelablePromise<{
        data?: Array<Flows>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/flows',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create a Flow
     * Create a new flow.
     * @returns any Successful request
     * @throws ApiError
     */
    public createFlow({
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
        requestBody?: Flows,
    }): CancelablePromise<{
        data?: Flows;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/flows',
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
     * Update Multiple Flows
     * Update multiple flows at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateFlows({
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
            data?: Flows;
            keys?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Array<Flows>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/flows',
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
     * Delete Multiple Flows
     * Delete multiple existing flows.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteFlows(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/flows',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve a Flow
     * Retrieve a single flow by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFlow({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<{
        data?: Flows;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/flows/{id}',
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
     * Update a Flow
     * Update an existing flow
     * @returns any Successful request
     * @throws ApiError
     */
    public updateFlow({
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
        requestBody?: Flows,
    }): CancelablePromise<{
        data?: Flows;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/flows/{id}',
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
     * Delete a Flow
     * Delete an existing flow
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteFlow({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/flows/{id}',
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
