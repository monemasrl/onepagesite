/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collections } from '../models/Collections';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CollectionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Collections
     * Returns a list of the collections available in the project.
     * @returns any Successful request
     * @throws ApiError
     */
    public getCollections({
        offset,
        meta,
    }: {
        /**
         * How many items to skip when fetching data.
         */
        offset?: number,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
    }): CancelablePromise<{
        data?: Array<Collections>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/collections',
            query: {
                'offset': offset,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create a Collection
     * Create a new collection in Directus.
     * @returns any Successful request
     * @throws ApiError
     */
    public createCollection({
        meta,
        requestBody,
    }: {
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: {
            /**
             * Unique name of the collection.
             */
            collection: string;
            /**
             * The fields contained in this collection. See the fields reference for more information. Each individual field requires field, type, and interface to be provided.
             */
            fields: Array<Record<string, any>>;
            /**
             * Name of a Google Material Design Icon that's assigned to this collection.
             */
            icon?: string | null;
            /**
             * A note describing the collection.
             */
            note?: string | null;
            /**
             * Text representation of how items from this collection are shown across the system.
             */
            display_template?: string | null;
            /**
             * Whether or not the collection is hidden from the navigation in the admin app.
             */
            hidden?: boolean;
            /**
             * Whether or not the collection is treated as a single object.
             */
            singleton?: boolean;
            /**
             * Key value pairs of how to show this collection's name in different languages in the admin app.
             */
            translation?: string | null;
            /**
             * Whether or not Content Versioning is enabled for this collection.
             */
            versioning?: boolean;
            /**
             * What field holds the archive value.
             */
            archive_field?: string | null;
            /**
             * What value to use for "archived" items.
             */
            archive_app_filter?: string | null;
            /**
             * What value to use to "unarchive" items.
             */
            archive_value?: string | null;
            /**
             * Whether or not to show the "archived" filter.
             */
            unarchive_value?: string | null;
            /**
             * The sort field in the collection.
             */
            sort_field?: string | null;
        },
    }): CancelablePromise<{
        data?: Collections;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/collections',
            query: {
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
     * Retrieve a Collection
     * Retrieves the details of a single collection.
     * @returns any Successful request
     * @throws ApiError
     */
    public getCollection({
        id,
        meta,
    }: {
        /**
         * Unique identifier of the collection.
         */
        id: string,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
    }): CancelablePromise<{
        data?: Collections;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/collections/{id}',
            path: {
                'id': id,
            },
            query: {
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update a Collection
     * Update an existing collection.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateCollection({
        id,
        meta,
        requestBody,
    }: {
        /**
         * Unique identifier of the collection.
         */
        id: string,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
        requestBody?: {
            /**
             * Metadata of the collection.
             */
            meta?: {
                /**
                 * Name of a Google Material Design Icon that's assigned to this collection.
                 */
                icon?: string | null;
                /**
                 * Choose the color for the icon assigned to this collection.
                 */
                color?: string | null;
                /**
                 * A note describing the collection.
                 */
                note?: string | null;
                /**
                 * Text representation of how items from this collection are shown across the system.
                 */
                display_template?: string | null;
                /**
                 * Whether or not the collection is hidden from the navigation in the admin app.
                 */
                hidden?: boolean;
                /**
                 * Whether or not the collection is treated as a single object.
                 */
                singleton?: boolean;
                /**
                 * Key value pairs of how to show this collection's name in different languages in the admin app.
                 */
                translation?: string | null;
                /**
                 * Whether or not Content Versioning is enabled for this collection.
                 */
                versioning?: boolean;
                /**
                 * What field holds the archive value.
                 */
                archive_field?: string | null;
                /**
                 * What value to use for "archived" items.
                 */
                archive_app_filter?: string | null;
                /**
                 * What value to use to "unarchive" items.
                 */
                archive_value?: string | null;
                /**
                 * Whether or not to show the "archived" filter.
                 */
                unarchive_value?: string | null;
                /**
                 * The sort field in the collection.
                 */
                sort_field?: string | null;
            };
        },
    }): CancelablePromise<{
        data?: Collections;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/collections/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Delete a Collection
     * Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteCollection({
        id,
    }: {
        /**
         * Unique identifier of the collection.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/collections/{id}',
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
