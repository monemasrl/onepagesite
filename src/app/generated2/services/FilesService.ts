/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Files } from '../models/Files';
import type { Folders } from '../models/Folders';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FilesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Files
     * List the files.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFiles({
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
        data?: Array<Files>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/files',
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
            },
        });
    }
    /**
     * Create a File
     * Create a new file
     * @returns any Successful request
     * @throws ApiError
     */
    public createFile({
        requestBody,
    }: {
        requestBody?: {
            data?: string;
        },
    }): CancelablePromise<{
        data?: Files;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/files',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Update Multiple Files
     * Update multiple files at the same time.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateFiles({
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
                data?: string;
            };
            keys?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Array<Files>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/files',
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
     * Delete Multiple Files
     * Delete multiple existing files.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteFiles(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/files',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve a Files
     * Retrieve a single file by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFile({
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
        data?: Files;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/files/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Update a File
     * Update an existing file, and/or replace it's file contents.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateFile({
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
             * Title for the file. Is extracted from the filename on upload, but can be edited by the user.
             */
            title?: string;
            /**
             * Preferred filename when file is downloaded.
             */
            filename_download?: string;
            /**
             * Description for the file.
             */
            description?: string | null;
            /**
             * Virtual folder where this file resides in.
             */
            folder?: (string | Folders) | null;
            /**
             * Tags for the file. Is automatically populated based on EXIF data for images.
             */
            tags?: Array<string> | null;
        },
    }): CancelablePromise<{
        data?: Files;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/files/{id}',
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
            },
        });
    }
    /**
     * Delete a File
     * Delete an existing file.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteFile({
        id,
    }: {
        /**
         * Unique identifier for the object.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/files/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }
}
