/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemsTeams } from '../models/ItemsTeams';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemsTeamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create an Item
     * Create a new teams item.
     * @returns any Successful request
     * @throws ApiError
     */
    public createItemsTeams({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: (Array<ItemsTeams> | ItemsTeams),
    }): CancelablePromise<{
        data?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/items/teams',
            query: {
                'meta': meta,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * List Items
     * List the teams items.
     * @returns any Successful request
     * @throws ApiError
     */
    public readItemsTeams({
        fields,
        limit,
        meta,
        offset,
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
    }): CancelablePromise<{
        data?: Array<ItemsTeams>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/teams',
            query: {
                'fields': fields,
                'limit': limit,
                'meta': meta,
                'offset': offset,
                'sort': sort,
                'filter': filter,
                'search': search,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Update Multiple Items
     * Update multiple teams items at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateItemsTeams({
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
        requestBody?: (Array<ItemsTeams> | ItemsTeams),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/teams',
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
        });
    }
    /**
     * Delete Multiple Items
     * Delete multiple existing teams items.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteItemsTeams(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/teams',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Item
     * Retrieve a single teams item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public readSingleItemsTeams({
        id,
        fields,
        meta,
        version,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
        /**
         * Control what fields are being returned in the object.
         */
        fields?: Array<string>,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        /**
         * Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.
         *
         */
        version?: string,
    }): CancelablePromise<{
        data?: ItemsTeams;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/teams/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'meta': meta,
                'version': version,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update an Item
     * Update an existing teams item.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSingleItemsTeams({
        id,
        fields,
        meta,
        requestBody,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
        /**
         * Control what fields are being returned in the object.
         */
        fields?: Array<string>,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: ItemsTeams,
    }): CancelablePromise<{
        data?: ItemsTeams;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/teams/{id}',
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
     * Delete an Item
     * Delete an existing teams item.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteSingleItemsTeams({
        id,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/teams/{id}',
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
