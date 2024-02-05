/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Fields } from '../models/Fields';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FieldsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List All Fields
     * Returns a list of the fields available in the project.
     * @returns any Successful request
     * @throws ApiError
     */
    public getFields({
        limit,
        sort,
    }: {
        /**
         * A limit on the number of objects that are returned.
         */
        limit?: number,
        /**
         * How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *
         */
        sort?: Array<string>,
    }): CancelablePromise<{
        data?: Array<Fields>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fields',
            query: {
                'limit': limit,
                'sort': sort,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * List Fields in Collection
     * Returns a list of the fields available in the given collection.
     * @returns any Successful request
     * @throws ApiError
     */
    public getCollectionFields({
        collection,
        sort,
    }: {
        /**
         * Unique identifier of the collection the item resides in.
         */
        collection: string,
        /**
         * How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *
         */
        sort?: Array<string>,
    }): CancelablePromise<{
        data?: Array<Fields>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fields/{collection}',
            path: {
                'collection': collection,
            },
            query: {
                'sort': sort,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Create Field in Collection
     * Create a new field in a given collection.
     * @returns any Successful request
     * @throws ApiError
     */
    public createField({
        collection,
        requestBody,
    }: {
        /**
         * Unique identifier of the collection the item resides in.
         */
        collection: string,
        requestBody?: {
            /**
             * Unique name of the field. Field name is unique within the collection.
             */
            field: string;
            /**
             * Directus specific data type. Used to cast values in the API.
             */
            type: string;
            /**
             * The schema info.
             */
            schema?: {
                /**
                 * The name of the field.
                 */
                name?: string;
                /**
                 * The collection of the field.
                 */
                table?: string;
                /**
                 * The type of the field.
                 */
                type?: string;
                /**
                 * The default value of the field.
                 */
                default_value?: string | null;
                /**
                 * The max length of the field.
                 */
                max_length?: number | null;
                /**
                 * If the field is nullable.
                 */
                is_nullable?: boolean;
                /**
                 * If the field is primary key.
                 */
                is_primary_key?: boolean;
                /**
                 * If the field has auto increment.
                 */
                has_auto_increment?: boolean;
                /**
                 * Related column from the foreign key constraint.
                 */
                foreign_key_column?: string | null;
                /**
                 * Related table from the foreign key constraint.
                 */
                foreign_key_table?: string | null;
                /**
                 * Comment as saved in the database.
                 */
                comment?: string | null;
                /**
                 * Database schema (pg only).
                 */
                schema?: string;
                /**
                 * Related schema from the foreign key constraint (pg only).
                 */
                foreign_key_schema?: string | null;
            };
            /**
             * The meta info.
             */
            meta?: {
                /**
                 * Unique identifier for the field in the `directus_fields` collection.
                 */
                id?: number;
                /**
                 * Unique name of the collection this field is in.
                 */
                collection?: string;
                /**
                 * Unique name of the field. Field name is unique within the collection.
                 */
                field?: string;
                /**
                 * Transformation flag for field
                 */
                special?: Array<string> | null;
                /**
                 * What interface is used in the admin app to edit the value for this field.
                 */
                'system-interface'?: string | null;
                /**
                 * Options for the interface that's used. This format is based on the individual interface.
                 */
                options?: Record<string, any> | null;
                /**
                 * What display is used in the admin app to display the value for this field.
                 */
                display?: string | null;
                /**
                 * Options for the display that's used. This format is based on the individual display.
                 */
                display_options?: Record<string, any> | null;
                /**
                 * If the field can be altered by the end user. Directus system fields have this value set to `true`.
                 */
                locked?: boolean;
                /**
                 * Prevents the user from editing the value in the field.
                 */
                readonly?: boolean;
                /**
                 * If this field should be hidden.
                 */
                hidden?: boolean;
                /**
                 * Sort order of this field on the edit page of the admin app.
                 */
                sort?: number | null;
                /**
                 * Width of the field on the edit form.
                 */
                width?: 'half' | 'half-left' | 'half-right' | 'full' | 'fill' | null;
                /**
                 * What field group this field is part of.
                 */
                group?: number | null;
                /**
                 * Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.
                 */
                translation?: Record<string, any> | null;
                /**
                 * A user provided note for the field. Will be rendered alongside the interface on the edit page.
                 */
                note?: string | null;
            } | null;
        },
    }): CancelablePromise<{
        data?: Fields;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fields/{collection}',
            path: {
                'collection': collection,
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
     * Retrieve a Field
     * Retrieves the details of a single field in a given collection.
     * @returns any Successful request
     * @throws ApiError
     */
    public getCollectionField({
        collection,
        id,
    }: {
        /**
         * Unique identifier of the collection the item resides in.
         */
        collection: string,
        /**
         * Unique identifier of the field.
         */
        id: string,
    }): CancelablePromise<{
        data?: Fields;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fields/{collection}/{id}',
            path: {
                'collection': collection,
                'id': id,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Update a Field
     * Update an existing field.
     * @returns any Successful request
     * @throws ApiError
     */
    public updateField({
        collection,
        id,
        requestBody,
    }: {
        /**
         * Unique identifier of the collection the item resides in.
         */
        collection: string,
        /**
         * Unique identifier of the field.
         */
        id: string,
        requestBody?: {
            /**
             * Unique name of the field. Field name is unique within the collection.
             */
            field?: string;
            /**
             * Directus specific data type. Used to cast values in the API.
             */
            type?: string;
            /**
             * The schema info.
             */
            schema?: {
                /**
                 * The name of the field.
                 */
                name?: string;
                /**
                 * The collection of the field.
                 */
                table?: string;
                /**
                 * The type of the field.
                 */
                type?: string;
                /**
                 * The default value of the field.
                 */
                default_value?: string | null;
                /**
                 * The max length of the field.
                 */
                max_length?: number | null;
                /**
                 * If the field is nullable.
                 */
                is_nullable?: boolean;
                /**
                 * If the field is primary key.
                 */
                is_primary_key?: boolean;
                /**
                 * If the field has auto increment.
                 */
                has_auto_increment?: boolean;
                /**
                 * Related column from the foreign key constraint.
                 */
                foreign_key_column?: string | null;
                /**
                 * Related table from the foreign key constraint.
                 */
                foreign_key_table?: string | null;
                /**
                 * Comment as saved in the database.
                 */
                comment?: string | null;
                /**
                 * Database schema (pg only).
                 */
                schema?: string;
                /**
                 * Related schema from the foreign key constraint (pg only).
                 */
                foreign_key_schema?: string | null;
            };
            /**
             * The meta info.
             */
            meta?: {
                /**
                 * Unique identifier for the field in the `directus_fields` collection.
                 */
                id?: number;
                /**
                 * Unique name of the collection this field is in.
                 */
                collection?: string;
                /**
                 * Unique name of the field. Field name is unique within the collection.
                 */
                field?: string;
                /**
                 * Transformation flag for field
                 */
                special?: Array<string> | null;
                /**
                 * What interface is used in the admin app to edit the value for this field.
                 */
                'system-interface'?: string | null;
                /**
                 * Options for the interface that's used. This format is based on the individual interface.
                 */
                options?: Record<string, any> | null;
                /**
                 * What display is used in the admin app to display the value for this field.
                 */
                display?: string | null;
                /**
                 * Options for the display that's used. This format is based on the individual display.
                 */
                display_options?: Record<string, any> | null;
                /**
                 * If the field can be altered by the end user. Directus system fields have this value set to `true`.
                 */
                locked?: boolean;
                /**
                 * Prevents the user from editing the value in the field.
                 */
                readonly?: boolean;
                /**
                 * If this field should be hidden.
                 */
                hidden?: boolean;
                /**
                 * Sort order of this field on the edit page of the admin app.
                 */
                sort?: number | null;
                /**
                 * Width of the field on the edit form.
                 */
                width?: 'half' | 'half-left' | 'half-right' | 'full' | 'fill' | null;
                /**
                 * What field group this field is part of.
                 */
                group?: number | null;
                /**
                 * Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.
                 */
                translation?: Record<string, any> | null;
                /**
                 * A user provided note for the field. Will be rendered alongside the interface on the edit page.
                 */
                note?: string | null;
            } | null;
        },
    }): CancelablePromise<{
        data?: Fields;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fields/{collection}/{id}',
            path: {
                'collection': collection,
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
     * Delete a Field
     * Delete an existing field.
     * @returns any Successful request
     * @throws ApiError
     */
    public deleteField({
        collection,
        id,
    }: {
        /**
         * Unique identifier of the collection the item resides in.
         */
        collection: string,
        /**
         * Unique identifier of the field.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fields/{collection}/{id}',
            path: {
                'collection': collection,
                'id': id,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
}
