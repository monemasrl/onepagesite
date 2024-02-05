/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AssetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get an Asset
     * Image typed files can be dynamically resized and transformed to fit any need.
     * @returns string Successful request
     * @throws ApiError
     */
    public getAsset({
        id,
        key,
        transforms,
        download,
    }: {
        /**
         * The id of the file.
         */
        id: string,
        /**
         * The key of the asset size configured in settings.
         */
        key?: string,
        /**
         * A JSON array of image transformations
         */
        transforms?: string,
        /**
         * Download the asset to your computer
         */
        download?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/assets/{id}',
            path: {
                'id': id,
            },
            query: {
                'key': key,
                'transforms': transforms,
                'download': download,
            },
            errors: {
                404: `Error: Not found.`,
            },
        });
    }
}
