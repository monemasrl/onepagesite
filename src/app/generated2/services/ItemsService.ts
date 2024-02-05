/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemsDatabase } from '../models/ItemsDatabase';
import type { ItemsDomain } from '../models/ItemsDomain';
import type { ItemsHosting } from '../models/ItemsHosting';
import type { ItemsSites } from '../models/ItemsSites';
import type { ItemsSitesStaff } from '../models/ItemsSitesStaff';
import type { ItemsTeams } from '../models/ItemsTeams';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create an Item
     * Create a new domain item.
     * @returns any Successful request
     * @throws ApiError
     */
    public createItemsDomain({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: (Array<ItemsDomain> | ItemsDomain),
    }): CancelablePromise<{
        data?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/items/domain',
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
     * List the domain items.
     * @returns any Successful request
     * @throws ApiError
     */
    public readItemsDomain({
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
        data?: Array<ItemsDomain>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/domain',
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
     * Update multiple domain items at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateItemsDomain({
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
        requestBody?: (Array<ItemsDomain> | ItemsDomain),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/domain',
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
     * Delete multiple existing domain items.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteItemsDomain(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/domain',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Item
     * Retrieve a single domain item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public readSingleItemsDomain({
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
        data?: ItemsDomain;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/domain/{id}',
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
     * Update an existing domain item.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSingleItemsDomain({
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
        requestBody?: ItemsDomain,
    }): CancelablePromise<{
        data?: ItemsDomain;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/domain/{id}',
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
     * Delete an existing domain item.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteSingleItemsDomain({
        id,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/domain/{id}',
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
     * Create an Item
     * Create a new database item.
     * @returns any Successful request
     * @throws ApiError
     */
    public createItemsDatabase({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: (Array<ItemsDatabase> | ItemsDatabase),
    }): CancelablePromise<{
        data?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/items/database',
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
     * List the database items.
     * @returns any Successful request
     * @throws ApiError
     */
    public readItemsDatabase({
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
        data?: Array<ItemsDatabase>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/database',
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
     * Update multiple database items at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateItemsDatabase({
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
        requestBody?: (Array<ItemsDatabase> | ItemsDatabase),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/database',
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
     * Delete multiple existing database items.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteItemsDatabase(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/database',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Item
     * Retrieve a single database item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public readSingleItemsDatabase({
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
        data?: ItemsDatabase;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/database/{id}',
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
     * Update an existing database item.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSingleItemsDatabase({
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
        requestBody?: ItemsDatabase,
    }): CancelablePromise<{
        data?: ItemsDatabase;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/database/{id}',
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
     * Delete an existing database item.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteSingleItemsDatabase({
        id,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/database/{id}',
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
     * Create an Item
     * Create a new hosting item.
     * @returns any Successful request
     * @throws ApiError
     */
    public createItemsHosting({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: (Array<ItemsHosting> | ItemsHosting),
    }): CancelablePromise<{
        data?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/items/hosting',
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
     * List the hosting items.
     * @returns any Successful request
     * @throws ApiError
     */
    public readItemsHosting({
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
        data?: Array<ItemsHosting>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/hosting',
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
     * Update multiple hosting items at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateItemsHosting({
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
        requestBody?: (Array<ItemsHosting> | ItemsHosting),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/hosting',
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
     * Delete multiple existing hosting items.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteItemsHosting(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/hosting',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Item
     * Retrieve a single hosting item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public readSingleItemsHosting({
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
        data?: ItemsHosting;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/hosting/{id}',
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
     * Update an existing hosting item.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSingleItemsHosting({
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
        requestBody?: ItemsHosting,
    }): CancelablePromise<{
        data?: ItemsHosting;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/hosting/{id}',
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
     * Delete an existing hosting item.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteSingleItemsHosting({
        id,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/hosting/{id}',
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
    /**
     * Create an Item
     * Create a new sites_staff item.
     * @returns any Successful request
     * @throws ApiError
     */
    public createItemsSitesStaff({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: (Array<ItemsSitesStaff> | ItemsSitesStaff),
    }): CancelablePromise<{
        data?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/items/sites_staff',
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
     * List the sites_staff items.
     * @returns any Successful request
     * @throws ApiError
     */
    public readItemsSitesStaff({
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
        data?: Array<ItemsSitesStaff>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/sites_staff',
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
     * Update multiple sites_staff items at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateItemsSitesStaff({
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
        requestBody?: (Array<ItemsSitesStaff> | ItemsSitesStaff),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/sites_staff',
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
     * Delete multiple existing sites_staff items.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteItemsSitesStaff(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/sites_staff',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Item
     * Retrieve a single sites_staff item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public readSingleItemsSitesStaff({
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
        data?: ItemsSitesStaff;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/sites_staff/{id}',
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
     * Update an existing sites_staff item.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSingleItemsSitesStaff({
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
        requestBody?: ItemsSitesStaff,
    }): CancelablePromise<{
        data?: ItemsSitesStaff;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/sites_staff/{id}',
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
     * Delete an existing sites_staff item.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteSingleItemsSitesStaff({
        id,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/sites_staff/{id}',
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
     * Create an Item
     * Create a new sites item.
     * @returns any Successful request
     * @throws ApiError
     */
    public createItemsSites({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: (Array<ItemsSites> | ItemsSites),
    }): CancelablePromise<{
        data?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/items/sites',
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
     * List the sites items.
     * @returns any Successful request
     * @throws ApiError
     */
    public readItemsSites({
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
        data?: Array<ItemsSites>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/sites',
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
     * Update multiple sites items at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateItemsSites({
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
        requestBody?: (Array<ItemsSites> | ItemsSites),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/sites',
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
     * Delete multiple existing sites items.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteItemsSites(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/sites',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve an Item
     * Retrieve a single sites item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public readSingleItemsSites({
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
        data?: ItemsSites;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/items/sites/{id}',
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
     * Update an existing sites item.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateSingleItemsSites({
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
        requestBody?: ItemsSites,
    }): CancelablePromise<{
        data?: ItemsSites;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/items/sites/{id}',
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
     * Delete an existing sites item.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteSingleItemsSites({
        id,
    }: {
        /**
         * Index of the item.
         */
        id: (number | string),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/items/sites/{id}',
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
