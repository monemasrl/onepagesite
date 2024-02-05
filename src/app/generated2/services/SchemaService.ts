/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Diff } from '../models/Diff';
import type { Schema } from '../models/Schema';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SchemaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve Schema Snapshot
     * Retrieve the current schema. This endpoint is only available to admin users.
     * @returns any Successful request
     * @throws ApiError
     */
    public schemaSnapshot({
        _export,
    }: {
        /**
         * Saves the API response to a file. Accepts one of "csv", "json", "xml", "yaml".
         */
        _export?: 'csv' | 'json' | 'xml' | 'yaml',
    }): CancelablePromise<{
        data?: Schema;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/schema/snapshot',
            query: {
                'export': _export,
            },
            errors: {
                403: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Apply Schema Difference
     * Update the instance's schema by passing the diff previously retrieved via `/schema/diff` endpoint in the JSON request body or a JSON/YAML file. This endpoint is only available to admin users.
     * @returns void
     * @throws ApiError
     */
    public schemaApply({
        requestBody,
    }: {
        requestBody: {
            data?: Diff;
        },
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/schema/apply',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Error: Unauthorized request`,
            },
        });
    }
    /**
     * Retrieve Schema Difference
     * Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.
     * @returns any Successful request
     * @throws ApiError
     */
    public schemaDiff({
        requestBody,
        force,
    }: {
        requestBody: {
            data?: Schema;
        },
        /**
         * Bypass version and database vendor restrictions.
         */
        force?: boolean,
    }): CancelablePromise<{
        data?: Diff;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/schema/diff',
            query: {
                'force': force,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Error: Unauthorized request`,
            },
        });
    }
}
