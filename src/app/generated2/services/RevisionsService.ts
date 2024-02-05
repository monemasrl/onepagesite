/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Revisions } from '../models/Revisions';
import type { x_metadata } from '../models/x_metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevisionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Revisions
     * List the revisions.
     * @returns any Successful request
     * @throws ApiError
     */
    public getRevisions({
        fields,
        limit,
        offset,
        meta,
        sort,
        filter,
        search,
        page,
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
        /**
         * Cursor for use in pagination. Often used in combination with limit.
         */
        page?: number,
    }): CancelablePromise<{
        data?: Array<Revisions>;
        meta?: x_metadata;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/revisions',
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'meta': meta,
                'sort': sort,
                'filter': filter,
                'search': search,
                'page': page,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }
    /**
     * Retrieve a Revision
     * Retrieve a single revision by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public getRevision({
        id,
        fields,
        meta,
    }: {
        /**
         * Index
         */
        id: number,
        /**
         * Control what fields are being returned in the object.
         */
        fields?: Array<string>,
        /**
         * What metadata to return in the response.
         */
        meta?: string,
    }): CancelablePromise<{
        data?: Revisions;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/revisions/{id}',
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
}
