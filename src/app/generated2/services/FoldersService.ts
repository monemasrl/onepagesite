/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folders } from '../models/Folders';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FoldersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Folders
     * List the folders.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFolders({
        fields,
        limit,
        offset,
        sort,
        filter,
        search,
        meta,
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
        /**
         * What metadata to return in the response.
         */
        meta?: string,
    }): CancelablePromise<{
        data?: Array<Folders>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/folders',
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'sort': sort,
                'filter': filter,
                'search': search,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create a Folder
     * Create a new folder.
     * @returns any Successful request
     * @throws ApiError
     */
    public createFolder({
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
             * Name of the folder.
             */
            name: string;
            /**
             * Unique identifier of the parent folder. This allows for nested folders.
             */
            parent?: number;
        },
    }): CancelablePromise<{
        data?: Folders;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/folders',
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
     * Update Multiple Folders
     * Update multiple folders at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateFolders({
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
                 * Name of the folder.
                 */
                name: string;
                /**
                 * Unique identifier of the parent folder. This allows for nested folders.
                 */
                parent?: number;
            };
            keys?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Array<Folders>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/folders',
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
     * Delete Multiple Folders
     * Delete multiple existing folders.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteFolders(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/folders',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve a Folder
     * Retrieve a single folder by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFolder({
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
        data?: Folders;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/folders/{id}',
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
     * Update a Folder
     * Update an existing folder
     * @returns any Successful request
     * @throws ApiError
     */
    public updateFolder({
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
             * Name of the folder. Can't be null or empty.
             */
            name?: string;
            /**
             * Unique identifier of the parent folder. This allows for nested folders.
             */
            parent?: number;
        },
    }): CancelablePromise<{
        data?: Folders;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/folders/{id}',
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
     * Delete a Folder
     * Delete an existing folder
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteFolder({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/folders/{id}',
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
